'use client'
import React, { useState } from 'react';
import { AiOutlineSwitcher } from 'react-icons/ai'; // Replace this with your preferred toggle icon

const SummaryDetail: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`p-4 bg-white text-black ${isOpen ? '' : 'hidden' }`} >
      <button
        className="flex items-center text-left text-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        title="Toggle details for Summary Title"
        aria-controls="expando-unique-id"
        aria-expanded={isOpen}
        onClick={toggleOpen}
      >
        <AiOutlineSwitcher className="w-5 h-5 mr-2 bg-black" aria-hidden="true" />
        <span className="sr-only text-lg text-black">Toggle details for Summary Title</span>
      </button>
      <div>
        <div className="mt-1">
          <h3 className="text-xl leading-6 font-semibold text-gray-900" title="Summary Title">
            Summary Title
          </h3>
        </div>
        <div className="mt-2" id="expando-unique-id">
          <p className="text-lg text-gray-900">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna
            mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetail;
