import React, {useState} from 'react'

export default function Search() {

    const [search, setSearch] = useState()

  return (
    <div className='m-2'>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Search
        </label>
            <div className="mt-1 w-1/4">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
  </div>
  )
}
