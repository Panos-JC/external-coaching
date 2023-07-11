import React from "react";

function SearchBar ({ handleChange, handleSearchChange, checked }) {
    return <>
        <div class='SearchBar'>
          <input type="text" placeholder="Search.." onChange={handleSearchChange} required></input>
          <div className='check'>
            <input type="checkbox" id="showProducts" name="showProducts" onChange={handleChange} checked={checked} value="stock"></input>
            <label for="showProducts" >Only show products in stock</label>
          </div> 
        </div>

    </>
}

export default SearchBar;