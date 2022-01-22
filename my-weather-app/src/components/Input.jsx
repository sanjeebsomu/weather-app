import React, { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Input = () => {
  const [cityName, setCityName] = useState('');
  const [newCityName, setnNewCityName] = useState('');
  const handleChange = (e) => {
    setnNewCityName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(newCityName)
    console.log(cityName);
  }
  return <>
      <form action="" onSubmit={handleSubmit} className='flex justify-center'>
          <input className='w-1/4 h-12 mt-12 outline-none text-3xl' type="text" name="cityName" id="cityName" value={newCityName} onChange={handleChange}/>
          <button type="submit" className='mt-12 opacity-75'>
            <ArrowCircleRightIcon sx={{fontSize: 50}}/>
          </button>         
      </form>
  </>;
};

export default Input;
