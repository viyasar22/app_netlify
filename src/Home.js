import React from 'react'
import Feed from './Feed'
import  DataContext  from './context/DataContext'

const Home = () => {
  const {searchresult,isLoading,fetchError} = React.useContext(DataContext);
  return (
    <main className='home'>
    { isLoading && <p>Loading posts...</p> }
    { fetchError && <p style={{color:'red'}}>{`Error: ${fetchError}`}</p> }
    { !isLoading && !fetchError &&
     (searchresult.length ? <Feed posts={searchresult} /> : <p style={{color:'blue'}}>No posts to display</p>)
    }
    
    </main>
  )
}

export default Home