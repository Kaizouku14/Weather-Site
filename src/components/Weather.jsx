import '../style/Weather.css'

const Content = () => {

   return (
     <>
        <main>
          <div className="content">
                <div className="location">
                  <span id="location-js"></span>
                </div>
                <div className="weather">
                    <img src="" alt="Weather" id="weather-logo-js"/>
                    <div className="temperature">
                      <span id="percentage-js"></span>
                      <span className="temp-span active" id="celsius-js">°C</span> |
                      <span className="temp-span" id="fahrenheit-js">°F</span>  
                    </div>
              </div>
              <div className="condition"> 
                <div className="condition-result">
                    <div id="time-js"></div>
                    <div id="condition-js"></div>
                </div>
                  
                  <div className="parameter">
                    <div id="parameter-js"></div>
                </div>
              </div>
         </div>
        </main>
     </>
   )
}

export default Content

