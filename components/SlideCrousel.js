import React from 'react'

const SideCrousel = ({food}) => {
  return (
    <div className='h-fit m-3 border border-gray-300 p-2 hover:my-2 duration-250'>
      <img src={food.imageURL} alt={food.name} className='h-[130] w-[230] rounded-md'></img>
      <p className='font-xs text-center font-bold py-2'>{food.name}</p>
    </div>
  )
}

export default SideCrousel