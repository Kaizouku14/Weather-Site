import React, { useState } from 'react';
import { fetchSearch } from '../service/WeatherApi';
import '../style/SearchBar.css';

const SearchBar = ({ onSearchBarClick }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showList, setShowList] = useState(false);
 
 
  const handleChanges = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length >= 2) {
      setSearchValue(inputValue);

      fetchSearch(inputValue)
        .then(res => {
          setSearchResult(res);
           setShowList(true);    
        })
        .catch(err => {
          console.error('Error fetching search results:', err);
          setSearchResult([]);
          setShowList(false);     
        });
        
    } else {

      setSearchValue(inputValue);
      setSearchResult([]);
      setShowList(false);   

    }
  };

  const handleClick = (value) => {

    const data = value;
    onSearchBarClick(data);
    setSearchValue('')
    setSearchResult([]);

  };

 
  return (
    <>
      <div className="search-bar">
        <input
          type="text" 
          placeholder="Search location" 
          value={searchValue}
          onChange={handleChanges} />
        {showList && (
          <div className="list" style={{ display: 'block' }}>
            {searchResult.map((value) => (
              <div key={value.id} onClick={ () => handleClick(`${value.name}, ${value.region}`)}>
                {value.name}, {value.region}, {value.country}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar
