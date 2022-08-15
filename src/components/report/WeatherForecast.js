import React from 'react'
import {useGlobalContext} from '../../context/context';
import moment from 'moment';
import celsiusToFarh from '../../utils/celsiusToFarh';

const WeatherForecast = () => {
    const { report, metricSystem } = useGlobalContext();
    return (
        <div className='container'>
            <div className='containerDesc'>10 days forecast</div>
            {
            report.forecast.forecastday.map((item, index) => {
                const {date, day} = item;
                return (
                <div className='dayContainer' key={index}>
                    <p>{moment(date).format('dddd')}</p>
                    <div className='weatherDesc'>
                        <img src={day.condition.icon} className='weatherImg'
                        alt={day.condition.text}></img>
                        <h5>{day.condition.text}</h5>
                    </div>
                    {metricSystem ? <h5>L {day.mintemp_c.toFixed()}°C</h5> : <h5>L {celsiusToFarh(day.mintemp_c.toFixed())}°F</h5>}
                    {metricSystem ? <h5>H {day.maxtemp_c.toFixed()}°C</h5> : <h5>H {celsiusToFarh(day.maxtemp_c.toFixed())}°F</h5>}
                </div>
                )
            })
            }
        </div>
    )
}

export default WeatherForecast
