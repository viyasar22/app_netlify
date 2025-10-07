import DataContext from './context/DataContext'

import React from 'react'
const Newpost = () => {
  const {postTitle,setPostTitle,postBody,setPostBody,handleSubmit} =
   React.useContext(DataContext);
  return (
   <main className='newpost'>
    <form action=""onSubmit={handleSubmit}>
      <label htmlFor="postTitle">post title</label>
      <input type="text"
      id='postTitle'
      required
      value={postTitle} 
      placeholder='Enter here'
      onChange={(e)=> setPostTitle(e.target.value)}/>
      <label htmlFor="postBody">post body</label>
      <textarea name="" id="postBody"
      required
      value={postBody}
      onChange={(e)=> setPostBody(e.target.value)} />
      <button type='submit'>submit</button>
    </form>
   </main>
  )
}

export default Newpost