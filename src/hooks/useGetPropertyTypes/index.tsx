import { apiRouteLocal } from "@/app/api/apiConfig";
import { Lookup } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetPropertyTypes = () => {
  const res = useQuery<Lookup[]>({
    queryKey: [ReactQueryKey.PROPERTY_TYPES],
    queryFn: () => fetch(apiRouteLocal.propertyTypes).then((res) => res.json()),
  });

  return { ...res };
};

export default useGetPropertyTypes;
