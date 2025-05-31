import { apiRouteLocal } from "@/app/api/apiConfig";
import { ListingsApiResponse, Property } from "@/types";
import { parsePropertyImage, ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetListings = () => {
  const res = useQuery<ListingsApiResponse>({
    queryKey: [ReactQueryKey.LISTINGS],
    queryFn: () => fetch(apiRouteLocal.listings).then((res) => res.json()),
    select: (data) => {
      return {
        ...data,
        data: data.data.map((listing) =>
          parsePropertyImage(listing)
        ) as Property[],
      };
    },
  });

  return { ...res };
};

export default useGetListings;
