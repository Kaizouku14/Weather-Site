import SearchBar from './components/SearchBar';
import Footer from './components/Footer'
import Content from './components/Weather'
import React, { useState } from 'react';


function App() {
  const [clickedData, setClickedData] = useState('');

  const handleSearchBarClick = (data) => {
    setClickedData(data);
  };

  return (
    <>
       <SearchBar onSearchBarClick={handleSearchBarClick}/>
       <Content clickedData={clickedData}/>
       <Footer/>
    </>
  )
}

export default App
