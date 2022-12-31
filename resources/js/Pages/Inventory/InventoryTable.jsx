import React, {useState, useContext, useReducer} from 'react'
import { Link } from '@inertiajs/inertia-react'
import {HiOutlineTrash} from 'react-icons/hi'
import {FiEdit} from 'react-icons/fi'
import { toggleForm } from './redux/reducer'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { useDispatch } from 'react-redux'

export default function InventoryTable({products}) {


    const [data, setData] = useState(() => [...products])
    const dispatch = useDispatch()
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
        columnHelper.accessor(row => row.created_at, {
            id: 'created_at',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Created Date</span>,
        }),
        columnHelper.accessor(row => row.id, {
            id: 'id',
            cell: info => 
            <div>
                <button onClick={() => dispatch(toggleForm(info.row.original))}><FiEdit /></button>
                <Link href= {route('inventory.destroy', info.getValue())} method = 'delete' as = 'button'><HiOutlineTrash /></Link>
            </div>,
            header: () => <span>Action</span>,
        }),
        ]
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })


  return (
    <div className="flex justify-center p-2">
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
