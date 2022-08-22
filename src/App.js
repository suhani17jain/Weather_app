import React from 'react';
import SearchLocation from './components/SearchLocation';
import WeatherReport from './components/report/WeatherReport';
import WeatherData from './components/report/WeatherData';
import WeatherForecast from './components/report/WeatherForecast';
import Error from './components/Error';
import { Circles } from  'react-loader-spinner'
import {useGlobalContext} from './context/context'

function App() {

  const { report, loading, error, location } = useGlobalContext();
  return <main>
    <div className="weatherPage">
      <SearchLocation />
      {
        loading && <div className='loader'>
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      }
      {
        report && !loading &&
          <div className='report'>
            <WeatherReport />
            <WeatherData />
            <WeatherForecast />
          </div>
      }
      {
        error && !report && !loading  && <Error />
      }
    </div>
  </main>;
}
export default App;
