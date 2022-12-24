import { useState } from 'react';

export default function Cart ({cartItem}) {

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal h-full'>
      <h2>Cart</h2>
      <ul>
        {cartItem.map(item => (
          <li className = 'bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal m-2' key={item.id}>
            <div className='grid grid-cols-3 gap-2'>
                <div>
                    Image
                </div>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.price}
                </div>
            </div>
            <div className='self-center'>
                <button
                    className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => removeItem(item)}>
                        -
                </button>
                {"0"}
                <button
                    className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => removeItem(item)}>
                        +
                </button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${"totalCost"}</p>

    </div>
  );
};
