import React from 'react'

const GridCard = ({food}) => {
  return (
    <div className='h-fit m-3 border border-gray-300 p-2 hover:m-2 duration-150'>
      <img src={food.imageURL} alt={food.name} className='h-[200] w-[340] rounded-md'></img>
      <p className='font-xs font-bold py-2'>{food.name}</p>
      <p className='text-sm '>{food.categories}</p>
      <p className='py-2 font-bold text-md'>₹{food.price} for two</p>
      <div className='justify-between flex w-full items-center'>
        <div className='bg-green-400 p-1 px-2 text-sm font-bold rounded-lg my-2 text-white'>{food.rating}*  Rating</div>
        <div className='text-sm font-bold mx-2'>{food.deliveryDuration} for delivery</div>
      </div>

    </div>
  )
}

export default GridCard