'use client';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import {
  CategoryColumn,
  columns,
} from '@/app/(dashboard)/[storeId]/(routes)/categories/components/CategoryColumns';
import ApiList from '../../../../../../components/ui/api-list';

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey='name'
      />
      <Heading
        title='API'
        description='API calls for Categories'
      />
      <Separator />
      <ApiList
        entityName='categories'
        entityIdName='categoryId'
      />
    </>
  );
};

export default CategoryClient;