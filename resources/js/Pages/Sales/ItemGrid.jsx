import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "./salesSlice";
import { Tab } from "@headlessui/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function ItemGrid({items}) {

    const dispatch = useDispatch()
    const categories = ['Main', 'Side', 'Drink', 'Dessert']

    return (

    <div className="w-full px-2">
      <Tab.Group>
        <Tab.List className="flex overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow font-bold'
                    : 'text-gray-400 hover:bg-white/[0.12] hover:text-black'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
        <div className='grid grid-cols-3 gap-4'>
                {items.map((item, index) => (
                    <button key={index} onClick={() => dispatch(addCart(item))}>
                    <div  className="bg-white hover:bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal hob">
                        <div className = "text-center text-gray-900 font-bold text-xl mb-2 pt-2">
                            {item.name}
                        </div>
                        <div className = "text-center text-gray-900 text-s">
                            ${item.price}
                        </div>
                    </div>
                    </button>
                ))}

        </div>
        </Tab.Panels>

      </Tab.Group>
    </div>

    );
}
