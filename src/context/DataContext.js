

import {  useNavigate } from "react-router-dom";
import {format} from 'date-fns';
import api from "../api/posts"

import { createContext,useState,useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";



const DataContext=createContext({});


export const DataProvider=({children})=>{
      const [posts,setPosts] =useState([])
   const [search,setSearch]=useState('')
   const [searchresult,setSearchresult]=useState([])
   const [postTitle,setPostTitle]=useState('')
   const [postBody,setPostBody]=useState('')
    const [editTitle,setEditTitle]=useState('')
    const [editBody,setEditBody]=useState('')
     const navigate=useNavigate()
        const {data,fetchError,isLoading}= useAxiosFetch('http://localhost:3500/posts')

        useEffect(()=>{
            setPosts(data);
        },[data]);

        useEffect(()=>{
            const filteredResults=posts.filter((post)=> ((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()));
            setSearchresult(filteredResults.reverse());
        },[posts,search])

   const handleSubmit = async (e)=>{
    e.preventDefault();
    const s=(posts.length ? ( posts.length +1): 1);
    const id=`${s}`;
    const datetime=format(new Date(),'MMMM dd,yyyy pp');
    const newpost={id,title: postTitle,datetime: datetime,body: postBody}
    try{
        const response=await api.post('/posts',newpost)
    const allpost=[...posts,response.data];
    setPosts(allpost);
    setPostBody('')
    setPostTitle('')
    navigate('/')
    }
    catch (err) {
        console.log(`Error: ${err.message}`);
  
  
   }
  }
  const handleEdit= async(id)=>{
    const datetime=format(new Date(),'MMMM dd,yyyy pp');
    const updatedpost={id,title: editTitle,datetime:
       datetime,body: editBody}
    try{
        const response=await api.put(`/posts/${id}`,updatedpost)
    setPosts(posts.map(post => post.id === id ? {...response.data} : post));
    setPostBody('')
    setPostTitle('')
    navigate('/')
    }
    catch (err) {
        console.log(`Error: ${err.message}`);
   }
  }
  const handleDelete= async(id)=>{
     try{
       await api.delete(`/posts/${id}`);
       const allpost=posts.filter(post => (post.id)!== id)
       setPosts(allpost);
       navigate('/')

    }
    catch (err) {
        console.log(`Error: ${err.message}`);   
  }
}
    
    return(
        <DataContext.Provider value={{
            search,setSearch,searchresult, fetchError,isLoading,handleSubmit,
            postTitle,setPostTitle,postBody,setPostBody,posts,handleDelete,
            editTitle,setEditTitle,editBody,setEditBody,handleEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;
 