import React from 'react'
import { useForm } from '@inertiajs/inertia-react';

export default function AddProductForm() {


    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: '',
        category: '',
        price: '',
        units: '',
    });
    
    const submit = (e) => {
        e.preventDefault();
        post(route('inventory.store'), {
            preserveState:false,
        });
    }

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    }


  return (


    <form 
        className='grid grid-cols-8 gap-2 mx-2'
        onSubmit={submit}
    >   
        
        <div className='col-span-3'>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" name="name" value = {data.name} onChange={handleChange}  
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className='col-span-2'>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select name="category" value = {data.category} onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option></option>
                <option>Main</option>
                <option>Side</option>
                <option>Drink</option>
                <option>Desert</option>
            </select>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" name="price" value = {data.price} onChange={handleChange} 
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input type="number" name="units" value = {data.units} onChange={handleChange} 
                required
                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className='relative'>
        <button disabled = {processing }className='absolute bottom-0 left-0 w-full h-2/3 text-md bg-green-500 text-white border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
            Add
        </button>
        </div>
    </form> 
  )
}
