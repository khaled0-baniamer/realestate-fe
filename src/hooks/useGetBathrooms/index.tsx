import { apiRouteLocal } from "@/app/api/apiConfig";
import { Lookup } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetBathrooms = () => {
  const res = useQuery<Lookup[]>({
    queryKey: [ReactQueryKey.BATHROOMS],
    queryFn: () =>
      fetch(apiRouteLocal.bathrooms).then((res) => res.json()),
  });

  return { ...res };
};

export default useGetBathrooms;
