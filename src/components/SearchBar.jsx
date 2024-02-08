import React, { useEffect, useState } from 'react'
import { fetchData } from '../service/WeatherApi';
import '../style/SearchBar.css'

const SearchBar = () => {
    const [searchValue , setSearchValue] = useState('');
  //const [searchResult, setSearchResult] = useState([]);
      
    const handleChanges = (event) => {
      const value = event.target.value

      setSearchValue(value)
       fetchData(searchValue) 
         .then((res) => console.log(res))
         .catch((err) => err) 
    }

   return(
      <>
        <div className ="search-bar" >
            <input type="text" placeholder="Search location" onChange={handleChanges}/> 
            <div id="list-js" className ="list"></div>
        </div>  
      </>
   )
}

function formatDate(inputDate) {
   const date = new Date(inputDate);
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const dayOfWeek = daysOfWeek[date.getDay()];
   let hours = date.getHours();
   const minutes = date.getMinutes();
 
   const amPm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12 || 12; 
 
   const formattedDate = `${dayOfWeek} ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
 
   return formattedDate;
 }

export default SearchBar;