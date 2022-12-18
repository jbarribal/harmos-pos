import sample from '../../assets/hamburger.png'

export default function ItemGrid({ items }) {
    return (

        <div className='grid grid-cols-5 gap-4'>
                {items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal">
                        <div>
                            <img className = 'h-32 justify-center m-auto'src={sample} alt='logo'/>
                        </div>
                        <div className = "text-center text-gray-900 font-bold text-xl mb-2 pt-2">
                            {item}
                        </div>
                    </div>
                ))}
        </div>
    );
}
