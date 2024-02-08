
import axios from "axios";

const KEY = '46269525cdbe4d58a4b80104242101'
const URL = 'https://api.weatherapi.com/v1/'


export const fetchData = async (searchedData) => {
    return await axios.get(`${URL}search.json?key=${KEY}&q=${encodeURIComponent(searchedData)}`)
    .then(response => response.data)
    .catch(error => console.error(error));
}



  
// async function fetchLocation(){
//     await fetch('https://ipapi.co/json/')
//     .then(response => response.json())
//     .then(data => {

//      const currentLocation = `${data.city}, ${data.region}, ${data.country_name}`;
//        fetchData(currentLocation, KEY);
//    })
//    .catch(error => {
//      console.error('Error fetching location:', error);
//  });
// }


// async function fetchSearch(location, API_KEY){

//     await fetch(`http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`)
//      .then((res) => res.json()) 
//      .then((data) => displayList(data,API_KEY))
//      .catch((err) => console.error('Error fetching data:', err));
// }