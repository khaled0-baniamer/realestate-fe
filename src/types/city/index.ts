import { Country } from "../country";

export type City = {
  id: number;
  name: string;
  countryId: number;
  createdAt: Date;
  updatedAt: Date;
  country?: Country;
};
