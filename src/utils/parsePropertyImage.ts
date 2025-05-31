import { IMAGE_URL } from "@/config";
import { Property } from "@/types";

export function parsePropertyImage(property: Property) {
  const baseUrl = `${IMAGE_URL}properties/`;
  const imagesArray =
    typeof property.images == "string" &&
    property.images
      .split(",")
      .map((imageName) => `${baseUrl}${imageName.trim()}`);

  return {
    ...property,
    images: imagesArray,
  };
}
