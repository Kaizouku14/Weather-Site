import React, { useState , useEffect} from 'react';
import { fetchLocation, fetchData } from '../service/WeatherApi';
import '../style/Weather.css';

const Content = ({clickedData}) => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [activeUnit, setActiveUnit] = useState('celsius');

  useEffect(() => {
    handleChanges();
  }, []);

  const handleChanges = () => {
    fetchLocation()
      .then(res => setLocation(res.city))
      .catch(err => console.error(err));
  };
   

  useEffect(() => {
    if (clickedData) {

      fetchData(clickedData)
        .then(res => setData(res))
        .catch(err => console.error(err));
        
    } else {

      fetchData(location)
        .then(res => setData(res))
        .catch(err => console.error(err));
    }
  }, [location, clickedData]); 
  
  const handleToggleUnit = (unit) => {
    setActiveUnit(unit);
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const formattedDate = `${dayOfWeek} ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
    return formattedDate;
  };

  return (
    <main>
      {data && data.location && data.current && (
        <div className="content">
          <div className="location">
            <span>{data.location.name}, {data.location.region}, {data.location.country}</span>
          </div>

          <div className="weather">
            <img src={data.current.condition.icon} alt="Weather"/>
            <div className="temperature">
              <span>{activeUnit === 'celsius' ? data.current.temp_c : data.current.temp_f}</span>
              <span className={`unit ${activeUnit === 'celsius' ? 'active' : ''}`} onClick={() => handleToggleUnit('celsius')}> °C</span> |
              <span className={`unit ${activeUnit === 'fahrenheit' ? 'active' : ''}`} onClick={() => handleToggleUnit('fahrenheit')}> °F</span>  
            </div>
          </div>

          <div className="condition"> 
            <div className="condition-data">
              <div>{formatDate(data.location.localtime)}</div>
              <div>{data.current.condition.text}</div>
            </div>
            
            <div className="parameter">
              <div> 
                Precipitation : {data.current.precip_in}% <br/>
                Humidity : {data.current.humidity}% <br/>
                Wind : {data.current.wind_kph} km/h
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Content;
