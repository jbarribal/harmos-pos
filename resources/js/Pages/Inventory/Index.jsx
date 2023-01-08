import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InventoryTable from './InventoryTable';
import Form from './Form';
import UpdateProductForm from './UpdateProductForm';
import { Head } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'



export default function Index(props) {
  
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
                  <Provider store = {store}>
                    <Form />
                    <InventoryTable products = {props.products} />
                  </Provider>
              </div>
          </div>
      </div>



    </AuthenticatedLayout>
  )
}
