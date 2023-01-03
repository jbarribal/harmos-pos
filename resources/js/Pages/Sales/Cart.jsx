import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incQty,decQty,removeCart } from './salesSlice';
import { HiOutlineTrash } from 'react-icons/hi';

export default function Cart () {
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.sales)
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItem.forEach(item => {
      total += item.price * item.quantity
    });
    setTotalCost(total);
  }, [cartItem]);


  return (

    <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal h-full'>
      <h2>Cart</h2>
      {console.log(cartItem)}
      <ul>
        {cartItem.map(item => (
          <li key ={item} className = 'bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal m-2'>
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
                    onClick={() => dispatch(decQty(item))}
                    >
                        -
                </button>
                {item.quantity} 
                <button
                    className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick = {() => dispatch(incQty(item))}
                        >
                        +
                </button>
            </div>
            <div>
              <button onClick = {() => dispatch(removeCart(item))}><HiOutlineTrash className = 'text-red-500'/></button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${totalCost}</p>

    </div>
  );
};
