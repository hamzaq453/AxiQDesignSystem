import React from 'react';

const TruncationUtility = () => {
  return (
    <div className='bg-sky-800'>
      {/* For single line truncation */}
      <div className="w-48">
        <p className="truncate" title="Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.">
          Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.
        </p>
      </div>

      {/* For list items */}
      <ul>
        <li className="flex items-center mr-16 truncate">
          <span>To:</span>
          <span className="ml-1 truncate">
            <a href="#" className="hover:underline" title="Lei Chan">Lei Chan</a>
          </span>
          <span className="ml-1">+ 44 more</span>
        </li>
        <li className="flex items-center mr-16 truncate">
          <span>To:</span>
          <span className="ml-1 truncate">
            <a href="#" className="hover:underline" title="Lei Chan with Long Name">Lei Chan with Long Name</a>
          </span>
          <span className="ml-1">+ 44 more</span>
        </li>
        <li className="flex items-center mr-16 truncate">
          <span>To:</span>
          <span className="ml-1 truncate">
            <a href="#" className="hover:underline" title="Lei Chan with Long Name that might go on for quite some distance futher than you might expect">
              Lei Chan with Long Name that might go on for quite some distance futher than you might expect
            </a>
          </span>
          <span className="ml-1">+ 44 more</span>
        </li>
      </ul>
    </div>
  );
};

export default TruncationUtility;
