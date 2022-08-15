import React from 'react';
import SearchLocation from './components/SearchLocation';
import WeatherReport from './components/report/WeatherReport';
import WeatherData from './components/report/WeatherData';
import WeatherForecast from './components/report/WeatherForecast';
import {useGlobalContext} from './context/context'

function App() {

  const { report } = useGlobalContext();
  return <main>
    <div className="weatherPage">
      <SearchLocation />
      {
        report && 
          <div className='report'>
            <WeatherReport />
            <WeatherData />
            <WeatherForecast />
          </div>
      }
    </div>
  </main>;
}
export default App;
