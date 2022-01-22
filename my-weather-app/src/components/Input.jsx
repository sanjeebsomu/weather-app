import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Input = () => {
  return <>
    <div className='flex justify-center'>
          <input className='w-1/4 h-12 mt-12 outline-none text-3xl bg-transparent' type="text" name="cityName" id="cityName"/>
          <div className='mt-12 opacity-75'>
          <ArrowCircleRightIcon sx={{fontSize: 40}}/>
          </div>
    </div>
  </>;
};

export default Input;
