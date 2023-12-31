'use client';

import { ColumnDef } from '@tanstack/react-table';
import CategoryCellAction from './CategoryCellAction';

export type CategoryColumn = {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'billboardLabel',
    header: 'BillboardLabel',
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <CategoryCellAction
        data={row.original}
        name='categories'
      />
    ),
  },
];
