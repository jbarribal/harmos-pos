import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCustomer, setChange, setMethod } from './checkoutSlice'

export default function List() {
    const notificationMethods = [{id: 1, val: 'Cash'}, {id: 2, val: 'Credit'}]
    const { transaction } = useSelector(state => state.checkout) 
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()


    function handleMethodToggle(e) {
        dispatch(setMethod(e.target.value))
        setDisabled(!disabled)

    }



  return (
    <div className="border-t border-gray-200">
    <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Customer</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <div className="relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="customer"
                    id="customer"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                    onChange={(e) => dispatch(setCustomer(e.target.value))}
                />
                </div>
            </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{transaction.total}</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
            <fieldset>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center" >
                    <input
                        id={notificationMethod.id}
                        name="notification-method"
                        type="radio"
                        value = {notificationMethod.val}
                        defaultChecked={notificationMethod.id === 1}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        onChange={(e) => handleMethodToggle(e)}
                        
                    />
                    <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                        {notificationMethod.val}
                    </label>
                </div>
                ))}
            </div>
            </fieldset>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cash Amount</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="number"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                    placeholder="0.00"
                    disabled = {disabled}
                    onChange={(e) => dispatch(setChange(e.target.value))}
                />
                </div>
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Change</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{transaction.change.toFixed(2)}</dd>
        </div>
    </dl>
</div>
  )
}
