import { apiRouteLocal } from "@/app/api/apiConfig";
import { Country } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetCountries = () => {
  const res = useQuery<Country[]>({
    queryKey: [ReactQueryKey.COUNTRIES],
    queryFn: () => fetch(apiRouteLocal.countries).then((res) => res.json()),
  });

  return { ...res };
};

export default useGetCountries;
