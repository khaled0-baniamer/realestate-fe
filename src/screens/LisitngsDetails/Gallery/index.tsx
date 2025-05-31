import { useDisclosure } from "@/hooks";
import { useEffect } from "react";

type Props = {
  images?: string[];
};

const Gallery: React.FC<Props> = ({ images }) => {
  const { handleToggle, isOpen } = useDisclosure();
  return (
    <div
      className="lg:col-span-6 col-span-8 grid grid-cols-6 gap-2 cursor-pointer"
      onClick={handleToggle}
    >
      <div className="lg:col-span-4 col-span-6 h-[400px]">
        <img
          src={images?.[0]}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="col-span-2 space-y-2 h-[400px] lg:block hidden">
        {images?.slice(1, 4)?.map((img, index) => (
          <div key={index}>
            <img src={img} className="object-cover h-32 w-full rounded-md" />
          </div>
        ))}
      </div>
      <GalleryDialog images={images} isOpen={isOpen} onClose={handleToggle} />
    </div>
  );
};

export default Gallery;


function GalleryDialog({
  images,
  onClose,
  isOpen,
}: {
  images?: string[];
  onClose: () => void;
  isOpen: boolean;
}) {
  // Prevent background scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-dark w-full h-full shadow-lg px-6 overflow-auto relative">
        <div className="flex justify-between items-center sticky top-0 z-10 bg-white py-4 ">
          <p className="font-semibold text-lg">Gallery</p>
          <button
            className="text-gray-500 hover:text-gray-700 px-4 py-2"
            onClick={onClose}
          >
            &#x2715; {/* Close button */}
          </button>
        </div>

        {/* Image Gallery */}
        <div className="mt-4">
          {images?.map((img, index) => (
            <div key={index} className="my-2">
              <img src={img} className="object-cover w-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

