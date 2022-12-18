import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ItemGrid from '@/Components/ItemGrid';
import Cart from '@/Components/Cart';
import { Head } from '@inertiajs/inertia-react';

export default function Sales({ auth, errors, header }) {

    const items = ['item1', 'item2','item3','item4','item5','item6']

    return (
        <AuthenticatedLayout auth={auth} errors={errors} header={header}>
            <Head title="Sales" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">Sales Page</div>
                            <div className="grid grid-cols-3 gap-4 p-4">
                                <div className='col-span-2'>
                                    <ItemGrid items={items}/>
                                </div>
                                <div className='col-span-1'>
                                    <Cart />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
