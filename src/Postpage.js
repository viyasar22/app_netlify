
import { useParams,Link } from 'react-router-dom'
import DataContext from './context/DataContext'

import React from 'react'

const Postpage = () => {
  const {posts,handleDelete} = React.useContext(DataContext);
   const { id } =useParams();
   const post= (posts || []).find((post) => (post.id).toString() === id);
  return (
    <main className="postpage">
      {post &&
        <>
          <article className="postpage-content" style={{border: '2px solid #888', borderRadius: '8px', padding: '1.5em', marginBottom: '2em', background: '#fafafa'}}>
            <h2 style={{marginBottom: '1rem'}}>{post.title}</h2>
            <p className='postdate' style={{marginBottom: '1rem'}}>{post.datetime}</p>
            <p className='postbody' style={{marginBottom: '2rem'}}>{post.body}</p>
          </article>
          <div className="button-group">
            <Link to={`/edit/${post.id}`}>
              <button className="action-btn" id='edit-btn'>Edit post</button>
            </Link>
            <button onClick={() => handleDelete(post.id)} className="action-btn" id='delete-btn'>Delete</button>
          </div>
        </>
      }
    </main>
   
  )
}

export default Postpage