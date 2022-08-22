import React from 'react'
import {useGlobalContext} from '../../context/context';
import Button from '../Button';
import moment from 'moment';
import celsiusToFarh from '../../utils/celsiusToFarh';

const WeatherReport = () => {
    const { report, metricSystem, setUnitValue } = useGlobalContext();
    return (
        <section className='mainReport'>
              <h6>{moment(report.location.localtime).format('MMMM Do YYYY')}</h6>
              <h3>{report.location.name}</h3>
              {metricSystem ? <h1>{report.current.temp_c.toFixed()}°C</h1> : <h1>{celsiusToFarh(report.current.temp_c.toFixed())}°F</h1>}
              <div className='weatherDesc'>
                <h4>{report.current.condition.text}</h4>
                <img src={report.current.condition.icon} className='weatherImg' alt={report.current.condition.text}></img>
              </div>
              <Button 
                submitData = {setUnitValue}
                text = {'Switch Units'}
              />
        </section>
    )
}

export default React.memo(WeatherReport)
