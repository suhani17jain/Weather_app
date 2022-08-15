import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [location, setLocation] = useState(localStorage.getItem('location') || '');
    const [report, setReport] = useState('');
    const [metricSystem, setUnitSystem] = useState(localStorage.getItem('unit') === 'true');
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const setUnitValue = () => {
        setUnitSystem(!metricSystem);
    }
    const url1 = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=10&aqi=no`;


    useEffect(() => {
        if(location.length > 0) {
            localStorage.setItem('location', location)
        }
    }, [location]);

    useEffect(() => {
        localStorage.setItem('unit', JSON.stringify(metricSystem))
    }, [metricSystem]);

    useEffect(() => {
        if(location.length > 0) {
            getData();
        }
    }, []);

    const getData = () => {
        axios.get(url1).then((res) => {
          setReport(res.data);
        })
        setLocation('');
      }
  
    return (
      <AppContext.Provider value={{ location, setLocation, getData, report, metricSystem, setUnitValue }}>
        {children}
      </AppContext.Provider>
    )
  }

  export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }