import { apiRouteLocal } from "@/app/api/apiConfig";
import { District } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetDistricts = () => {
  const res = useQuery<District[]>({
    queryKey: [ReactQueryKey.DISTRICTS],
    queryFn: () => fetch(apiRouteLocal.districts).then((res) => res.json()),
  });

  return { ...res };
};

export default useGetDistricts;
