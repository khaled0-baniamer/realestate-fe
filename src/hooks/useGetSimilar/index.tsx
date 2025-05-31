import { apiRouteLocal } from "@/app/api/apiConfig";
import { Property } from "@/types";
import { parsePropertyImage, ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetSimilar = (id: number) => {
  const res = useQuery<Property[]>({
    queryKey: [ReactQueryKey.SIMILAR_LISTING],
    queryFn: async () =>
      await fetch(apiRouteLocal.similarListing + id).then((res) => res.json()),

    select: (data) =>
      data.map((list) => parsePropertyImage(list)) as Property[],
  });

  return res;
};

export default useGetSimilar;
