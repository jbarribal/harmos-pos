import React, {useState, useReducer} from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

const defaultData = [
    {
    name:'Quarter Pound with Cheese',
    code:12345,
    brand:'McDonalds',
    price:3.99,
    quantity: 800,
    createdDate: '2021-01-01',
    action: 'Edit',
    },
    {
    name:'Quarter Pound with Cheese',
    code:12345,
    brand:'McDonalds',
    price:3.99,
    quantity: 800,
    createdDate: '2021-01-01',
    action: 'Edit',
    },
    {
    name:'Quarter Pound with Cheese',
    code:12345,
    brand:'McDonalds',
    price:3.99,
    quantity: 800,
    createdDate: '2021-01-01',
    action: 'Edit',
    },
    {
    name:'Quarter Pound with Cheese',
    code:12345,
    brand:'McDonalds',
    price:3.99,
    quantity: 800,
    createdDate: '2021-01-01',
    action: 'Edit',
    },
    {
    name:'Quarter Pound with Cheese',
    code:12345,
    brand:'McDonalds',
    price:3.99,
    quantity: 800,
    createdDate: '2021-01-01',
    action: 'Edit',
    },

]


const columnHelper = createColumnHelper()

const columns = [
columnHelper.accessor(row => row.name, {
    id: 'name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Name</span>,
}),
columnHelper.accessor(row => row.code, {
    id: 'code',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Code</span>,
}),
columnHelper.accessor(row => row.brand, {
    id: 'brand',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Brand</span>,
}),
columnHelper.accessor(row => row.price, {
    id: 'price',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Price</span>,
}),
columnHelper.accessor(row => row.quantity, {
    id: 'quantity',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Quantity</span>,
}),
columnHelper.accessor(row => row.createdDate, {
    id: 'Created Date',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Created Date</span>,
}),
columnHelper.accessor(row => row.Action, {
    id: 'Action',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Action</span>,
}),
]
  


export default function InventoryTable({products}) {

    const [data, setData] = useState(() => [...products])


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })

    
  return (
    <div className="flex justify-center p-2">
        {console.log(products)}
        <table className='w-full'>
        <thead className='text-left'>
            {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                <th key={header.id}>
                    {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                        )}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody>
            {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                <td className= 'text-justify' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>

    </div>
  )
}
