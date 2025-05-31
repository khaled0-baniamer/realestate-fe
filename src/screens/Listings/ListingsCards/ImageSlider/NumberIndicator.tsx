import { Image } from "@phosphor-icons/react";

type NumberIndicatorProps = {
  currentImage: number;
  totalImages: number;
};

export const NumberIndicator = ({
  currentImage,
  totalImages,
}: NumberIndicatorProps) => {
  return (
    <div className="absolute right-2.5 bottom-2.5 z-10">
      <div className="flex items-center shadow-lg bg-white dark:bg-dark rounded-full px-2 py-0.5 space-x-1">
        <Image size={20} />
        <span className=" text-xs">
          {currentImage} / {totalImages}
        </span>
      </div>
    </div>
  );
};
