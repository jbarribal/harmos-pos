import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { createContext, useContext, useState } from 'react';
import ItemGrid from '@/Components/ItemGrid';
import Cart from '@/Components/Cart';
import { Head } from '@inertiajs/inertia-react';



export const ThemeContext = createContext( {
    addItem: () => {},
    cartItem: []
});


export default function Sales({ auth, errors, header }) {

    const [cartItem , setCartItem] = useState([])

    function addItem(item){
        setCartItem([...cartItem,item])
        console.log(cartItem)
    }

    const menuItem = [{id:1, name: "Hamburger", price: 5.25}, {id:2, name: "Cheeseburger", price: 6.15}]

    return (
        <AuthenticatedLayout auth={auth} errors={errors} header={header}>

            <Head title="Sales" />
            <ThemeContext.Provider value = {addItem}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">Sales Page</div>
                            <div className="grid grid-cols-3 gap-4 p-4">
                                <div className='col-span-2'>
                                    <ItemGrid items={menuItem}/>
                                </div>
                                <div className='col-span-1'>
                                    <Cart cartItem={cartItem} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </ThemeContext.Provider>
        </AuthenticatedLayout>
    );
}
