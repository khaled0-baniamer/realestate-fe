import { City } from "../city";
import { Country } from "../country";
import { District } from "../district";
import { Lookup } from "../Lookup";
import { User } from "../user";

export type ListingsApiResponse = {
  data: Property[];
  page: number;
  size: number;
};

export type Property = {
  id: number;
  title: string;
  description: string;
  area: number;
  images: string[] | string;
  price: number;
  bedroomId: number;
  bathroomId: number;
  countryId: number;
  cityId: number;
  districtId: number;
  typeId: number;
  furnishedId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  bedroom: Lookup;
  bathroom: Lookup;
  country: Country;
  city: City;
  district: District;
  type: Lookup;
  furnished: Lookup;
  user: User;
  purpose:string
};

export type ListingAmenity = {
  id: number;
  listingId: number;
  amenityId: number;
  listing: Property;
  amenity: Amenity;
};

export type Amenity = {
  id: number;
  name: string;
  description: string;
  icon: string;
  order: number;
};
