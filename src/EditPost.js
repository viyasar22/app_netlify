import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect } from 'react'
import DataContext from './context/DataContext'

const EditPost = () => {
  const {posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit} = React.useContext(DataContext);
    const { id } =useParams();
    const post= (posts || []).find((post) => (post.id).toString() === id);

    useEffect(()=>{
      if(post){
        setEditTitle(post.title)
        setEditBody(post.body)
      }
    },[post,setEditTitle,setEditBody])
  return (
   < main className="newpost">
      {editTitle &&
       <>
        <h2>Edit Post</h2>
        <form className='newpostform'
         onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="posttitle">Title</label> 
            <input type="text"
            id='posttitle'
            required 
            value={editTitle}
            onChange={(e)=> setEditTitle(e.target.value)} />
            <label htmlFor="postbody">Post body</label> 
            <textarea name="" id="postbody"
            required
            value={editBody}
            onChange={(e)=> setEditBody(e.target.value)} ></textarea>
            <button type='submit' onClick={()=> handleEdit(post.id)}>Submit</button>
        </form>
         </>
        }
         {!editTitle &&
            <>
            <p>Post not found</p>
            <Link to='/'><button>Go back to homepage</button></Link>
            </>
         }
    </main>
    )
}

export default EditPost