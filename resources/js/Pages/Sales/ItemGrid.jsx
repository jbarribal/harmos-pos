import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "./salesSlice";
import { Tab } from "@headlessui/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function ItemGrid({products}) {


  let productsData = []
  products.forEach(product => {
    if (!productsData[product.category]) {
        productsData[product.category] = []
    }
    productsData[product.category].push({
        id: product.id,
        name: product.name,
        price: product.price,
        units: product.units,
        quantity: 1
    })
  });



  const dispatch = useDispatch()


    
    return (  

    <div className="w-full px-2">
      <Tab.Group>
        <Tab.List className="flex overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1">
          {Object.keys(productsData).map((category) => (
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
          {Object.values(productsData).map((product, idx) => (
              <Tab.Panel
              key={idx}
              className={classNames(
                'grid grid-cols-3 gap-4',
              )}
            >
              {product.map((item, index) => (
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
              </Tab.Panel>
          ))}
        </Tab.Panels>

      </Tab.Group>
    </div>

    );
}
