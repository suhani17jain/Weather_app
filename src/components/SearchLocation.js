import React, { useState, useCallback } from 'react';
import InputContainer from './InputContainer';
import Button from './Button';
import {useGlobalContext} from '../context/context';
import axios from 'axios';
import Debounce from '../utils/debounce';

const SearchLocation = () => {
    const [searchData, setSearchData] = useState([]);
    const { location, setLocation, getData } = useGlobalContext();
    const url = `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;


    const getLocationSuggestions = (text) => {
        if (text.length > 0) {
          axios.get(url).then((res) => {
            const data = res.data;
            let cities = data.filter((item) => {
              const regx = new RegExp(`^${text}`, 'gi');
              return item.city.match(regx);
            });
            setSearchData(cities);
          })
        } else {
          setSearchData([]);
        }
      }
    
    
      const optimizedSearch = useCallback(Debounce(getLocationSuggestions), []);
    
      const handleInputData = (text) => {
        setLocation(text);
        optimizedSearch(text);
      }
    
      const handleLocationSuggestions = (text) => {
        setLocation(text);
        setSearchData([]);
      }
    return (
        <div className="searchContainer">
            <div className='inputContainer'>
            <InputContainer 
                value = {location}
                setData = {handleInputData}
                placeholder = {'Enter City or Zip code'}
                setSearchData = {setSearchData}
                />
                {
                searchData?.length > 0 && <div className='autoSuggestion'>
                    {
                    searchData.map((item, index) => {
                        return <div key={index} className='autoSuggestionItem' onClick={() => handleLocationSuggestions(item.city)}><span>{item.city}</span></div>
                    })
                    }
                </div>
                }
            </div>
            <Button 
                submitData = {getData}
                text = {'Search'}
            />
        </div>
    )
}

export default SearchLocation
