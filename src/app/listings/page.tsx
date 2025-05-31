import ListingsScreen from "@/screens/Listings";
import { SearchParams } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings Search",
};

export default async function Listings({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return <ListingsScreen params={params}/>;
}
