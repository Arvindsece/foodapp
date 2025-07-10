
'use client'

import React from 'react';

const error = ({error}) => {
  return (
    <div className='h-[80vh] w-full justify-center align-center flex flex-col'>
        <div className='m-auto'>
          <img src='cartFailure.png' className='h-[200px] w-[200px]'></img>
          <h1 className='font-bold text-2xl m-5'>Error in loading cart</h1>
        </div>
    </div>
  )
}

export default error