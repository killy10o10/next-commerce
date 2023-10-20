'use client';

import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

import { UserButton } from '@clerk/nextjs';

const RootPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen();
    }
  },[onOpen, isOpen])

  return (
    <>
      <div className='p-5'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </>
  );
};

export default RootPage;
