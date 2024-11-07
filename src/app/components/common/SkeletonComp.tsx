import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonComp = () => {
  return (
    <div>
      <Skeleton  className="h-6 w-full" />
      <Skeleton className="mt-3 h-6 w-full" />
      <div className='flex items-center justify-center gap-2 mt-4'>
      <Skeleton  className="h-12 w-[240px]" />
      <Skeleton className="h-12 w-[240px]" />
      <Skeleton className="h-12 w-[240px]" />
      </div>
    </div>
  )
}

export default SkeletonComp;
