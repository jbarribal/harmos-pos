import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InventoryTable from '../Components/InventoryTable';
import AddProductForm from '../Components/AddProductForm';
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Inventory(props) {
  return (
    <AuthenticatedLayout 
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Inventory Manager</h2>}
    >

    <Head title="Inventory" />
    <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                          <input type="search" id="site-search" name='q' placeholder='Search'/>
                        </div>
                        <button className='border bg-gray-200'>
                          Add Product
                        </button>
                        <AddProductForm />
                        <InventoryTable />
                    </div>
                </div>
            </div>



    </AuthenticatedLayout>
  )
}
