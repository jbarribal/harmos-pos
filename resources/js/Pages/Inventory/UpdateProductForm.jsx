import React from 'react'
import { useForm } from '@inertiajs/inertia-react';
import { useSelector } from 'react-redux';



export default function UpdateProductForm() {

    const { product } = useSelector(state => state.form)
    const { data, setData, patch, processing, errors, reset, reload } = useForm({
        name: product.name,
        code: product.code,
        brand: product.brand,
        price: product.price,
        quantity:product.quantity,
    });
    
    const submit = () => {
        patch(route('inventory.update',product.id), {
            preserveState:false
        })
        };

  return (




    <form 
        className='grid lg:grid-cols-3 w-5/6 gap-4'
        onSubmit={submit}
    >
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' defaultValue={product.name} onChange={e => setData('name', e.target.value)} type='text'  name = 'itemName' placeholder='Item Name' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' defaultValue={product.code} onChange={e => setData('code', e.target.value)} type='text' name = 'code' placeholder='Code / SKU' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' defaultValue={product.brand} onChange={e => setData('brand', e.target.value)} type='text' name = 'brand' placeholder='Brand' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' defaultValue={product.price} onChange={e => setData('price', e.target.value)} type='number' name = 'price' placeholder='Price' />
        </div>
        <div className='input-type'>
            <input className='border w-full px-5 py-3 focus:outline' defaultValue={product.quantity} onChange={e => setData('quantity', e.target.value)} type='number' name = 'quantity' placeholder='Quantity' />
        </div>
        <button processing= {processing} className='flex justify-center text-md w-3/6 bg-orange-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
            Update Product
        </button>
    </form> 
  )
}
