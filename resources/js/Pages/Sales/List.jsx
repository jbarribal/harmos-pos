import React, {useState} from 'react'

export default function List() {
    const notificationMethods = [{id: 1, title: 'Cash'}, {id: 2, title: 'Credit'}]
    const [disabled, setDisabled] = useState(false)


  return (
    <div className="border-t border-gray-200">
    <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order#</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">1234567</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$300</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
            <fieldset>
            <legend className="sr-only">Notification method</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center" >
                    <input
                        id={notificationMethod.id}
                        name="notification-method"
                        type="radio"
                        defaultChecked={notificationMethod.id === 1}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        onChange={() => setDisabled(!disabled)}
                        
                    />
                    <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                        {notificationMethod.title}
                    </label>
                </div>
                ))}
            </div>
            </fieldset>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cash Amount</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                    placeholder="0.00"
                    disabled = {disabled}
                />
                </div>
            </dd>
        </div>
    </dl>
</div>
  )
}
