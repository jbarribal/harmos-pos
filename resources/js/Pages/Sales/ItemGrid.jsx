import { useDispatch } from "react-redux";
import { addCart } from "./salesSlice";


export default function ItemGrid({items}) {

    const dispatch = useDispatch()


    return (

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
    );
}
