import React from 'react';

const Main = () => {
  return <>
    <div className='flex flex-col items-center mt-12'>
        <div className='weatherIcon'>
            <img src="/images/rainy-day.png" alt="weather symbole" className='w-52' />
        </div>
        <div className='temperature flex flex-col items-center'>
            <h3>16&deg;C</h3>
            <div className='highLow'>
                <span className='px-3'>6&deg;C</span>
                <span className='px-3'>12&deg;C</span>
            </div>
            <h3>Scattered Thunder Showers</h3>
        </div>
    </div>
  </>;
};

export default Main;
