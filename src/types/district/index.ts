import { City } from "../city";

export type District = {
  id: number;
  name: string;
  cityId: number;
  createdAt: Date;
  updatedAt: Date;
  city?: City;
};
