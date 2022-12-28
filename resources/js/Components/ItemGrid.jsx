import sample from '../../assets/hamburger.png'
import { useContext } from 'react';
import { ThemeContext } from '@/Pages/Sales/Index';


export default function ItemGrid({ items }) {


    const addItem = useContext(ThemeContext)
    return (



        <div className='grid grid-cols-3 gap-4'>
                {items.map((item, index) => (
                    <button onClick={() => addItem(item)}>
                    <div key={index} className="bg-white hover:bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal hob">
                        <div>
                            <img className = 'h-32 justify-center m-auto'src={sample} alt='logo'/>
                        </div>
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
    );
}
