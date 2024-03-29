import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incQty,decQty,removeCart } from './salesSlice';
import { toggleModal, setTotal, setUserId, setItems } from './checkoutSlice';
import { HiOutlineTrash } from 'react-icons/hi';

export default function Cart ({user}) {
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.sales)
  const { transaction } = useSelector(state => state.checkout)

  useEffect(() => {
    let total = 0;
    cartItem.forEach(item => {
      total += item.price * item.quantity
    });
    dispatch(setTotal(total.toFixed(2)))
  }, [cartItem]);

  function handleCheckout () {
    dispatch(setItems(cartItem))
    dispatch(setUserId(user.id))
    dispatch(toggleModal())
  }


  return (

    <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal h-full'>
      <h2>Cart</h2>
      <ul>
        {cartItem.map(item => (
          <li key ={item.id} className = 'bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal m-2'>
            <div className='grid grid-cols-3 gap-2'>
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
      <p>Total: ${transaction.total}</p>
      <button 
        className='bg-blue-500 enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
         onClick={() => handleCheckout()}
         disabled = {cartItem.length === 0}
        >
          Checkout
        </button>

    </div>
  );
};
