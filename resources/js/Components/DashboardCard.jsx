import {MdOutlineAttachMoney, MdOutlineArticle, MdOutlinePermIdentity, MdOutlineCloudCircle} from 'react-icons/md'

export default function DashboardCard() {
  return (

    <div className='grid grid-cols-4 gap-4 mx-2 my-4'>
        <div className='bg-blue-100 hover:bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal hob'>
            <div className='grid grid-cols-3 '>
                <MdOutlineAttachMoney className='col-span-1 text-4xl' />
                <div className="col-span-2">
                    <h3 className='font-bold text-center'>$ 93,000</h3>
                    <p className='font-semibold text-center'>Total Revenue</p>
                </div>
            </div>
        </div>
        <div className='bg-blue-100 hover:bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal hob'>
            <div className='grid grid-cols-3 '>
                <MdOutlineArticle className='col-span-1 text-4xl' />
                <div className="col-span-2">
                    <h3 className='font-bold text-center'>814</h3>
                    <p className='font-semibold text-center'>Total Orders</p>
                </div>
            </div>
        </div>
        <div className='bg-blue-100 hover:bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between leading-normal hob'>
            <div className='grid grid-cols-3 '>
                <MdOutlinePermIdentity className='col-span-1 text-4xl' />
                <div className="col-span-2">
                    <h3 className='font-bold text-center'>421</h3>
                    <p className='font-semibold text-center'>Walk-ins</p>
                </div>
            </div>
        </div>
        <div className='bg-blue-100 hover:bg-gray-200 rounded-lg shadow-lg  p-6 flex flex-col justify-between leading-normal hob'>
            <div className='grid grid-cols-3 '>
                <MdOutlineCloudCircle className='col-span-1 text-4xl' />
                <div className="col-span-2">
                    <h3 className='font-bold text-center'>393</h3>
                    <p className='font-semibold text-center'>Online Orders</p>
                </div>
            </div>
        </div>
    </div>
  )
}
