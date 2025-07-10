import React from 'react'
import SlideCrousel from '@/components/SlideCrousel';
import GridCard from '@/components/GridCard';

import Foods from '@/components/foods.json';

const page = () => {
  return (
    <div>
      <div className='justify-between flex mx-20 items-center'>
        <p className='font-bold my-5 text-xl '>Top restaurant chains in Noida</p>
        <div className='flex flex-row gap-10'>
          <p className='font-bold text-2xl cursor-pointer'>←</p>
          <p className='font-bold text-2xl cursor-pointer'>→</p>
        </div>
      </div>
      <div className='flex flex-row overflow-x-auto whitespace-nowrap no-scrollbar mx-20'>
        {
          Foods.map((food) => (
            <div key={food.name} className='flex-shrink-0 no-scrollbar '>
              <SlideCrousel food={food} />
            </div>
            )
          )
        }     
      </div>
      <h1 className='my-10 mx-15 font-bold text-xl'>Restaurants with online food delivery in Noida</h1>
      <div className='grid grid-cols-4 mx-20'>
      {
          Foods.map((food) => (
            <div key={food.name} className='cols-span-1'>
              <GridCard food={food} />
            </div>
            )
          )
        }  
      </div>
    </div>
  )
}

export default page