import { apiRouteLocal } from "@/app/api/apiConfig";
import { City } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetCities = () => {
  const res = useQuery<City[]>({
    queryKey: [ReactQueryKey.CITIES],
    queryFn: () => fetch(apiRouteLocal.cities).then((res) => res.json()),
  });

  return { ...res };
};

export default useGetCities;
