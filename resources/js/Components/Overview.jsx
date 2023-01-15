import React from 'react'
import { ScaleIcon } from '@heroicons/react/24/outline'



const cards = [
    { name: 'Total Sales', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
    { name: 'Total Orders', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
    { name: 'Customers', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
    
    // More items...
  ]


export default function Overview() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        {cards.map((card) => (
            <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                        <dd>
                            <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                        </dd>
                        </dl>
                    </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
  </div>
  )
}
