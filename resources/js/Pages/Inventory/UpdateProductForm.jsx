import React from 'react'
import { useForm } from '@inertiajs/inertia-react';
import { useSelector } from 'react-redux';



export default function UpdateProductForm() {

    const { product } = useSelector(state => state.form)
    const { data, setData, patch, processing, errors, reset, reload } = useForm({
        name: product.name,
        category: product.category,
        price: product.price,
        units:product.units,
    });
    
    const submit = () => {
        patch(route('inventory.update',product.id), {
            preserveState:false,
        })
        };

  return (




    <form 
        className='grid grid-cols-8 gap-2 mx-2'
        onSubmit={submit}
    >
        <div className='col-span-3'>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" name="name" defaultValue={product.name} onChange={e => setData('name', e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className='col-span-2'>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select name="category" defaultValue={product.category} onChange={e => setData('category', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>Main</option>
                <option>Side</option>
                <option>Drink</option>
                <option>Desert</option>
            </select>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="text" name="price" defaultValue={product.price} onChange={e => setData('price', e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input type="text" name="units" defaultValue={product.units} onChange={e => setData('units', e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className='relative'>
        <button processing= {processing} className='absolute bottom-0 left-0 w-full h-2/3 text-md bg-orange-500 text-white border rounded-md hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500'>
            Update
        </button>
        </div>
    </form> 
  )
}
