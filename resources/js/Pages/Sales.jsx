import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ItemGrid from '@/Components/ItemGrid';
import { Head } from '@inertiajs/inertia-react';

export default function Sales({ auth, errors, header }) {

    const items = ['item1', 'item2','item3','item4','item5']

    return (
        <AuthenticatedLayout auth={auth} errors={errors} header={header}>
            <Head title="Sales" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">Sales Page</div>
                        <div className="p-6 text-gray-900">
                            <div>
                                <ItemGrid items={items}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
