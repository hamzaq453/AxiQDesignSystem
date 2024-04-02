import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'; // You can replace this with the appropriate icon

type PathItemProps = {
  isSelected: boolean;
  title: string;
};

const PathItem: React.FC<PathItemProps> = ({ isSelected, title }) => {
  const itemBaseClass =
    'flex items-center px-4 py-2 border-r-2 rounded border-transparent cursor-pointer';
  const currentItemClass = isSelected
    ? 'bg-blue-600 text-white'
    : 'bg-gray-200 text-black font-semibold h-18 hover:bg-gray-300';
  return (
    <li
      role="presentation"
      className={`flex-1 text-center ${itemBaseClass} ${currentItemClass}`}
    >
      <a
        href="#"
        className="flex justify-center items-center space-x-2"
        aria-selected={isSelected}
        role="option"
        tabIndex={isSelected ? 0 : -1}
      >
        <IoIosCheckmarkCircleOutline className="w-4 h-4" />
        <span>{title}</span>
      </a>
    </li>
  );
};

const Path: React.FC = () => {
  // Determine the selected path item based on your state or props
  const selectedPath = 'Contacted'; // Example selected path

  return (
    <div className="bg-black mb-4 p-4 text-black shadow rounded">
      <div className="flex">
        <div className="flex w-2xl overflow-hidden ">
          <ul
            className="flex divide-x divide-gray-500 text-lg text-black w-full"
            role="listbox"
            aria-orientation="horizontal"
          >
            <PathItem isSelected={selectedPath === 'Contacted'} title="Contacted" />
            <PathItem isSelected={selectedPath === 'Open'} title="Open" />
            <PathItem isSelected={selectedPath === 'Unqualified'} title="Unqualified" />
            <PathItem isSelected={selectedPath === 'Nurturing'} title="Nurturing" />
            <PathItem isSelected={selectedPath === 'Closed'} title="Closed" />
          </ul>
        </div>
        <div className="flex-shrink-0 rounded bg-blue-600">
          <button className="flex items-center justify-center  px-4 py-2 text-white">
            <IoIosCheckmarkCircleOutline className="w-4 h-4 mr-2" /> Mark Status as Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Path;
