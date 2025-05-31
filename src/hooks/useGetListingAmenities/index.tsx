import { apiRouteLocal } from "@/app/api/apiConfig";
import { ListingAmenity } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetListingAmenities = (id: number) => {
  const res = useQuery<ListingAmenity[]>({
    queryKey: [ReactQueryKey.LISTING_AMENITIES],
    queryFn: async () =>
      await fetch(apiRouteLocal.listingsAmenities + id).then((res) =>
        res.json()
      ),
  });

  return res;
};

export default useGetListingAmenities;
