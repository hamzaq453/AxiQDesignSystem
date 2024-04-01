import { SearchIcon, ChevronDownIcon, StarIcon, QuestionMarkCircleIcon, CogIcon, BellIcon, UserCircleIcon, PlusIcon } from '@heroicons/react/solid';

const GlobalHeader = () => {
  return (
    <header className="bg-white border-b w-full border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-1">
        <div className="rounded-full text-blue-500 bg-blue-100 p-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c-2.927 0-5.329 2.402-5.329 5.329 0 4.66 5.329 10.344 5.329 10.344s5.329-5.684 5.329-10.344c0-2.927-2.402-5.329-5.329-5.329z" />
          </svg>
        </div>
        
        <div className="relative">
          <button className="flex items-center  lg:ml-40 bg-white border border-black rounded px-3 py-1 text-gray-700 hover:bg-gray-50">
            Accounts
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          </button>
          {/* Dropdown menu placeholder */}
        </div>
        <div className="flex items-center border border-black bg-white rounded px-2 py-1">
          <SearchIcon className="w-5 h-5 text-gray-500" />
          <input type="search" placeholder="Search Salesforce" className="pl-2 outline-none" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <StarIcon className="w-7 h-7" />
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <PlusIcon className="w-7 h-75" />
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <QuestionMarkCircleIcon className="w-7 h-7" />
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <CogIcon className="w-7 h-7" />
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
          <BellIcon className="w-7 h-7" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <UserCircleIcon className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};

export default GlobalHeader;
