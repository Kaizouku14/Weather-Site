
import axios from "axios";

//kunin nyo putangina nyo
const API_KEY = '46269525cdbe4d58a4b80104242101'
const URL = 'https://api.weatherapi.com/v1/'


export const fetchLocation = async () => {
    return await axios.get('https://ipapi.co/json/')
    .then(response => response.data)
    .catch(error => console.error(error))
}
export const fetchSearch = async (searchedData) => {
    return await axios.get(`${URL}search.json?key=${API_KEY}&q=${encodeURIComponent(searchedData)}`)
    .then(response => response.data)
    .catch(error => console.error(error));
}

export const fetchData = async(value) => {
    return await axios.get(`${URL}current.json?key=${API_KEY}&q=${encodeURIComponent(value)}`)
    .then(response => response.data)
    .catch(error => console.error(error))
}  
