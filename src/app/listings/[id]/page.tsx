import ListingDetailsScreen from "@/screens/LisitngsDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings Details",
};



type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ListingDetails({ params }: Props) {
  const { id } = await params;
  return <ListingDetailsScreen id={Number(id)} />;
}
