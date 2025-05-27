import React from 'react';
import './SearchCompt.css';
import { FaSearch } from "react-icons/fa";

const SearchCompt = () => {
  return (
    <div className='search-container'>
      <form >
        <input type='search' className='search-input' placeholder='Search here'/>
        <button className='search-btn'><FaSearch className='search-icon' /></button>
      </form>
    </div>
  )
}

export default SearchCompt;
