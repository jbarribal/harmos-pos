import React from 'react'

export default function AddProductForm() {
  return (

    <form className='grid lg:grid-cols-2 w-4/6 gap-4'>
    <div className='input-type'>
        <input className='border w-full px-5 py-3 focus:outline' type='text' name = 'itemName' placeholder='Item Name' />

    </div>
    <div className='input-type'>
        <input className='border w-full px-5 py-3 focus:outline'  type='text' name = 'code' placeholder='Code / SKU' />
    </div>
    <div className='input-type'>
        <input className='border w-full px-5 py-3 focus:outline' type='text' name = 'brand' placeholder='Brand' />
    </div>
    <div className='input-type'>
        <input className='border w-full px-5 py-3 focus:outline' type='number' name = 'price' placeholder='Price' />
    </div>
    <div className='input-type'>
        <input className='border w-full px-5 py-3 focus:outline' type='number' name = 'units' placeholder='Units' />
    </div>
    <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
    Add <span className='px-1'> + </span>
    </button>
</form> 
  )
}
