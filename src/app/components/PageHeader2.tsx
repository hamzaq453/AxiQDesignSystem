// components/PageHeader.tsx
import React from 'react';

const PageHeader2: React.FC = () => {
  return (
    <div className='w-full'>
      <div>
        <div className="bg-white text-black shadow-md">
          <div className="flex justify-between items-center font-bold text-xl bg-gray-100 px-6 py-4 border-b border-gray-200">
            This is a Page Header
          </div>
          <div className="p-6 text-lg">
          This is Page Header Content
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader2;
