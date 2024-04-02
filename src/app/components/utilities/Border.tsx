import React from 'react';

const BorderUtility: React.FC = () => {
  return (
    <div className="space-y-4 bg-slate-800 ">
      {/* Border Width */}
      <div className="border-2 border-gray-500 p-2">Border Width 2</div>
      <div className="border-4 border-gray-500 p-2">Border Width 4</div>

      {/* Border Color */}
      <div className="border border-red-500 p-2">Border Color Red</div>
      <div className="border border-blue-500 p-2">Border Color Blue</div>

      {/* Border Style */}
      <div className="border border-solid border-gray-500 p-2">Border Style Solid</div>
      <div className="border border-dashed border-gray-500 p-2">Border Style Dashed</div>
      <div className="border border-dotted border-gray-500 p-2">Border Style Dotted</div>

      {/* Border Radius */}
      <div className="border border-gray-500 p-2 rounded">Border Radius</div>
      <div className="border border-gray-500 p-2 rounded-lg">Border Radius Large</div>
      <div className="border border-gray-500 p-2 rounded-full">Border Radius Full</div>

      {/* Combined Utilities */}
      <div className="border-4 border-dashed border-purple-500 p-2 rounded-full">
        Combined Utilities: Width, Style, Color, Radius
      </div>
    </div>
  );
};

export default BorderUtility;
