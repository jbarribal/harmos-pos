import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { createContext, useContext, useState } from 'react';
import PaymentModal from './PaymentModal';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import { Head } from '@inertiajs/inertia-react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';




export default function Sales( props ) {

    const menuItem = [{id: 1, name: "Hamburger", price: 5.25, quantity:1}, {id:2,name: "Cheeseburger", price: 6.15, quantity:1}]

    return (
        <AuthenticatedLayout 
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Point of Sale</h2>}
        >

            <Head title="Sales" />
            <Provider store = {store}>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <PaymentModal />
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* <div className="p-6 text-gray-900">Point Of Sale</div> */}
                            <div className="grid grid-cols-3 gap-4 p-4">
                                <div className='col-span-2'>
                                    <ItemGrid items = {menuItem}/>
                                </div>
                                <div className='col-span-1'>
                                    <Cart  />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </Provider>
        </AuthenticatedLayout>
    );
}
