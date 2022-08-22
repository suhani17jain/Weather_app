import React from 'react';
import {useGlobalContext} from '../../context/context';
import mpkToKph from '../../utils/mphToKph';

const WeatherData = () => {
    const { report, metricSystem } = useGlobalContext();
    return (
        <section className='container'>
            <div className='containerDesc'>Weather conditions today</div>
            <div className='containerContent'>
            <div className='box'>
                <h4>{report.current.humidity}%</h4>
                <p>Humidity</p>
            </div>
            <div className='box'>
                <h4>{report.current.pressure_in} Pa</h4>
                <p>Pressure</p>
            </div>
            <div className='box'>
                {metricSystem? <h4>{report.current.wind_mph} MPH</h4> : <h4>{mpkToKph(report.current.wind_mph).toFixed(2)} KPH</h4>}
                <p>Wind Speed</p>
            </div>
            </div>
        </section>
    )
}

export default WeatherData
