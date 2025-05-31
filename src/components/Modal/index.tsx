type Props = {
  onClose: () => void;
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white dark:bg-dark rounded-t-lg md:rounded-lg shadow-lg p-6 max-w-md w-full 
                      absolute bottom-0 md:relative md:max-w-md md:w-full"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{title}</p>
          <button
            className=" text-gray-500 hover:text-gray-700  px-4 py-2"
            onClick={onClose}
          >
            &#x2715; {/* Close button */}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
