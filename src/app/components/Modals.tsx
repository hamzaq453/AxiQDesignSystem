import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Make sure to install react-icons

// If you later decide to accept props, like a close handler or children, define them here:
type ModalProps = {
  // onClose: () => void;
  // children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = () => {
  // Placeholder function, replace with actual functionality
  const handleClose = () => {
    console.log('Close modal');
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-heading-01"
      >
        <div className="relative p-8 bg-white  text-black  w-full max-w-md m-auto flex-col flex rounded-lg">
          <button
            className="absolute top-0 right-0 m-4"
        
            aria-label="Cancel and close"
          >
            <AiOutlineClose className="text-black" />
          </button>
          <div className="text-center">
            <h1 id="modal-heading-01" className="text-2xl font-bold">Modal header</h1>
          </div>
          <div className="my-4">
            <p className="text-left text-lg ">
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
            </p>
            {/* More content */}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm hover:shadow"
              aria-label="Cancel and close"
            >
              Cancel
            </button>
            <button
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-40" role="presentation"></div>
    </>
  );
};

export default Modal;
