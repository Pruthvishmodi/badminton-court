import React from 'react';
import Cards  from '@/components/cards';

const index = () => {
  return (
    <div className="flex items-center gap-4 px-container mx-auto py-9">
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default index;

