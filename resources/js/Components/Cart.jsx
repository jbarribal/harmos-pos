import { useState } from 'react';

export default function Cart () {
  // Create state for the items in the cart and the total cost
  const items = ['item1', 'item2','item3','item4','item5','item6']
//   const [items, setItems] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);

//   // Function to add an item to the cart
//   const addItem = (item) => {
//     setItems([...items, item]);
//     setTotalCost(totalCost + item.price);
//   }

//   // Function to remove an item from the cart
//   const removeItem = (item) => {
//     setItems(items.filter(i => i !== item));
//     setTotalCost(totalCost - item.price);
//   }

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal h-full'>
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li className = 'bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal m-2' key={item.id}>
            <div className='grid grid-cols-3 gap-2'>
                <div>
                    Image
                </div>
                <div>
                    Name
                </div>
                <div>
                    Price
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
