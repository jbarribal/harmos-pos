import React from 'react'
import { useForm } from '@inertiajs/inertia-react';

export default function AddProductForm() {


    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: '',
        code: '',
        brand: '',
        price: '',
        quantity: '',
    });
    
    const submit = (e) => {
        e.preventDefault();
        post(route('inventory.store'), {
            preserveState:false 
        });
    }
  return (


    <form 
        className='grid lg:grid-cols-3 w-5/6 gap-4'
        onSubmit={submit}
    >
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' value = {data.name} onChange={e => setData('name', e.target.value)} type='text'  name = 'itemName' placeholder='Item Name' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' value = {data.code} onChange={e => setData('code', e.target.value)} type='text' name = 'code' placeholder='Code / SKU' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' value  = {data.brand} onChange={e => setData('brand', e.target.value)} type='text' name = 'brand' placeholder='Brand' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' value = {data.price} onChange={e => setData('price', e.target.value)} type='number' name = 'price' placeholder='Price' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' value={data.quantity} onChange={e => setData('quantity', e.target.value)} type='number' name = 'quantity' placeholder='Quantity' />
        </div>
        <button processing= {processing} className='flex justify-center text-md w-3/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
            Add Product
        </button>
    </form> 
  )
}
