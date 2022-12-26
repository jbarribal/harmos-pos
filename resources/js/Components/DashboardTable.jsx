import React, { useState, useReducer } from 'react'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
  


  
  const defaultData = [
    {
      item:'Quarter Pound with Cheese',
      orders:530,
      PPU:3.99,
      Revenue:2114.70,
    },
    {
      item:'Large Soda',
      orders:520,
      PPU:2.99,
      Revenue:1559.80,
    },
    {
      item:'Big Mac Meal',
      orders:502,
      PPU:6.99,
      Revenue:3514.98,
    },
    {
      item:'Big Mac',
      orders:502,
      PPU:3.99,
      Revenue:2014.98,
    },
    {
      item:'McChicken Deluxe',
      orders:492,
      PPU:3.99,
      Revenue:1963.08,
    },

  ]
  
  const columnHelper = createColumnHelper()
  
  const columns = [
    columnHelper.accessor(row => row.item, {
      id: 'item',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Item</span>,
    }),
    columnHelper.accessor(row => row.orders, {
      id: 'orders',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Orders</span>,
    }),
    columnHelper.accessor(row => row.PPU, {
      id: 'PPU',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>PPU</span>,
    }),
    columnHelper.accessor(row => row.Revenue, {
      id: 'Revenue',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Revenue</span>,
    }),
  ]
  
export default function DashboardTable() {

  const [data, setData] = useState(() => [...defaultData])
  const rerender = useReducer(() => ({}), {})[1]

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
            {/* <div className="h-4" />
            <button onClick={() => rerender()} className="border p-2">
              Rerender
            </button> */}
      </div>
  )
}
