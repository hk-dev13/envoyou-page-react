import React, { useEffect } from 'react';

/**
 * Enhanced Modal Component
 * Provides smooth modal animations and accessibility features
 */

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = ''
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full'
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick && onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleOverlayClick}
      />

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full ${sizes[size]} bg-slate-800 rounded-lg shadow-xl transform transition-all duration-300 scale-95 opacity-0 animate-in fade-in-0 zoom-in-95 ${className}`}
          style={{
            animation: 'modal-appear 0.3s ease-out forwards'
          }}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              {title && (
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
              )}

              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-slate-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal trigger button
export const ModalTrigger = ({
  children,
  modalContent,
  modalProps = {},
  className = ''
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalProps}
      >
        {modalContent}
      </Modal>
    </>
  );
};

export default Modal;
