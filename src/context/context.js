import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [location, setLocation] = useState(localStorage.getItem('location') || '');
    const [report, setReport] = useState('');
    const [error, setError] = useState('');
    const [metricSystem, setUnitSystem] = useState(localStorage.getItem('unit') === 'true');
    const [loading, setLoading] = useState(false);
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
      // setLoading(true);
        axios.get(url1).then((res) => {
          setReport(res.data);
          // setLoading(false);
          setLocation('');
        }).catch((error) => {
          handleError();
        })
    }

    const handleError = () => {
      setError('Location not found');
        setLoading(false);
        setReport('');
        localStorage.removeItem("location");
        localStorage.removeItem("unit");
    }
  
    return (
      <AppContext.Provider value={{ location, setLocation, getData, report, metricSystem, setUnitValue, loading, error }}>
        {children}
      </AppContext.Provider>
    )
  }

  export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }