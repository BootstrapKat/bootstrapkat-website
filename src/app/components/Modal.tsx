'use client';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  role?: string;
  imageSrc?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  useEffect(() => {
    // Disable scrolling on the background when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Clean up: re-enable scrolling when the modal closes
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose(); // Close modal when clicking outside of content area
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto"
      onClick={handleOutsideClick}
    >
      <div className="relative bg-white p-6 rounded-md w-full max-w-4xl md:mx-8 md:my-16 animate-slideUp modal-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl z-10"
        >
          &times;
        </button>

        {/* Line Below Close Button */}
        <hr className="border-gray-300 mt-8 mb-6" />

        {imageSrc && (
          <div className="overflow-auto max-h-[80vh]">
            <img
              src={imageSrc}
              alt="Design Mockup"
              className="w-full object-contain"
              style={{ touchAction: 'pinch-zoom' }} // Enable pinch-to-zoom
            />
          </div>
        )}
      </div>

      {/* Full-Screen Modal on Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .modal-content {
            width: 100vw;
            height: 100vh;
            padding: 1rem;
            position: fixed;
            top: 0;
            left: 0;
            overflow: auto;
          }

          .modal-content img {
            max-height: 100%;
            max-width: 100%;
          }
        }

        /* Slide-Up Animation */
        .animate-slideUp {
          transform: translateY(100%);
          animation: slideUp 0.4s forwards;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
