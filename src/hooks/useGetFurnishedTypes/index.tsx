import { apiRouteLocal } from "@/app/api/apiConfig";
import { Lookup } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetFurnishedTypes = () => {
  const res = useQuery<Lookup[]>({
    queryKey: [ReactQueryKey.FUNISHED_TYPES],
    queryFn: () => fetch(apiRouteLocal.furnishedTypes).then((res) => res.json()),
  });

  return { ...res };
};
export default useGetFurnishedTypes;
