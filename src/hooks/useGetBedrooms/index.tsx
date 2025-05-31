import { apiRouteLocal } from "@/app/api/apiConfig";
import { Lookup } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetBedrooms = () => {
  const res = useQuery<Lookup[]>({
    queryKey: [ReactQueryKey.BEDROOMS],
    queryFn: () => fetch(apiRouteLocal.bedrooms).then((res) => res.json()),
  });

  return { ...res };
};

export default useGetBedrooms;
