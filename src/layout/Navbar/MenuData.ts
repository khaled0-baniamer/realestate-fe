import { Menu } from "@/types";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Rent",
    path: "/listings?purpose=rent",
    newTab: false,
  },
  {
    id: 33,
    title: "Buy",
    path: "/listings?purpose=buy",
    newTab: false,
  },
];
export default menuData;
