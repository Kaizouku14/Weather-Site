import { useState } from 'react';
import '../style/SearchBar.css'
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
    
  const handleChanges = (event) => {
    
  }
  
 return(
    <>
      <div className ="search-bar" >
          <input type="text" placeholder="Search location" onChange={handleChanges}/> 
          <div className ="list" ></div>
      </div>  
    </>
 )
}

export default SearchBar;