import React from 'react';

const VisibilityUtilities = () => {
  return (
    <div className="space-y-4 bg-slate-600">
      {/* Assistive text for screen readers only */}
      <div className="sr-only">I am hidden from sight</div>

      {/* Visibility utilities */}
      <div>
        <div className="hidden">I am hidden</div>
        <div className="visible">I am visible</div>
      </div>

      {/* Display utilities */}
      <div>
        <div className="hidden">I am hidden</div>
        <div className="block">I am shown as a block</div>
        <div className="inline-block">I am shown as an inline-block</div>
      </div>

      {/* Opacity utilities */}
      <div>
        <div className="opacity-0 transition-opacity">I have zero opacity</div>
        <div className="opacity-100 transition-opacity">I have 100% opacity</div>
      </div>
    </div>
  );
};

export default VisibilityUtilities;
