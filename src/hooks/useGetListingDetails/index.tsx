import { apiRouteLocal } from "@/app/api/apiConfig";
import { Property } from "@/types";
import { parsePropertyImage, ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetListingDetails = (id: number) => {
  const res = useQuery<Property>({
    queryKey: [ReactQueryKey.LISTING_DETAILS],
    queryFn: async () =>
      await fetch(apiRouteLocal.listings + id).then((res) => res.json()),

    select: (data) => parsePropertyImage(data) as Property,
  });

  return res;
};

export default useGetListingDetails;
