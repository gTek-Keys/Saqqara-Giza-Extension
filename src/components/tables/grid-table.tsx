"use client"

import React from 'react'
import { Grid } from 'gridjs-react'
import "gridjs/dist/theme/mermaid.css"

interface GridTableProps {
  data: any[][]
  columns: string[]
  search?: boolean
  pagination?: boolean | { limit: number }
  sort?: boolean
  resizable?: boolean
  className?: string
}

export function GridTable({
  data,
  columns,
  search = true,
  pagination = { limit: 10 },
  sort = true,
  resizable = true,
  className = '',
}: GridTableProps) {
  return (
    <div className={`w-full ${className}`}>
      <Grid
        data={data}
        columns={columns}
        search={search}
        pagination={pagination}
        sort={sort}
        resizable={resizable}
        style={{
          table: {
            'font-size': '14px',
          },
          th: {
            'background-color': '#f8fafc',
            'border-bottom': '2px solid #e2e8f0',
            'font-weight': '600',
            'color': '#475569',
            'padding': '12px 16px',
          },
          td: {
            'padding': '12px 16px',
            'border-bottom': '1px solid #e2e8f0',
          },
        }}
        className={{
          container: 'rounded-lg border border-gray-200 overflow-hidden',
          table: 'w-full border-collapse',
          thead: 'bg-gray-50',
          tbody: 'bg-white',
          tr: 'hover:bg-gray-50 transition-colors',
          th: 'text-left',
          td: '',
          footer: 'bg-gray-50 px-4 py-3 border-t border-gray-200',
          search: 'mb-4 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          pagination: 'flex items-center justify-between mt-4',
          paginationButton: 'px-3 py-1 mx-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50',
          paginationButtonCurrent: 'px-3 py-1 mx-1 text-sm bg-blue-500 text-white border border-blue-500 rounded',
        }}
      />
    </div>
  )
}

export default GridTable