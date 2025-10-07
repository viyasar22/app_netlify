import React from 'react'
import {Link} from 'react-router-dom'
import  DataContext  from './context/DataContext'

const Nav = () => {
  const {search,setSearch} = React.useContext(DataContext);
  return (
    <nav className='nav'>
        <form  className='searchform' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="search"></label>
            <input type="text"
            id='search'
            placeholder='search post here'
            value={search}
            onChange={(e)=> setSearch(e.target.value)} />

        </form>
        <ul><li><Link to='/'>Home</Link></li>
        <li><Link to='post'>Post</Link></li>
        <li><Link to='about'>About</Link></li></ul>
    </nav>
  )
}

export default Nav