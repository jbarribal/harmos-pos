import React from 'react'
import {BookmarkIcon} from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/inertia-react';
// import {
//     ClockIcon,
//     CogIcon,
//     CreditCardIcon,
//     DocumentReportIcon,
//     HomeIcon,
//     QuestionMarkCircleIcon,
//     ScaleIcon,
//     ShieldCheckIcon,
//     UserGroupIcon,
//   } from '@heroicons/react/outline'



  const navigation = [
    { name: 'Dashboard', href: 'dashboard', icon: BookmarkIcon, current: true },
    { name: 'Sales', href: 'sales', icon: BookmarkIcon, current: false },
    { name: 'Inventory', href: 'inventory.index', icon: BookmarkIcon, current: false },

  ]


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function Sidebar() {
    
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
            <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
            alt="Easywire logo"
            />
        </div>
        <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
            <div className="px-2 space-y-1">
            {navigation.map((item) => (
                <Link
                key={item.name}
                href={route(item.href)}
                className={classNames(
                    item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                    'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                )}
                aria-current={item.current ? 'page' : undefined}
                >
                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" />
                {item.name}
                </Link>
            ))}
            </div>
        </nav>
        </div>
  </div>
  )
}
