import { apiRouteLocal } from "@/app/api/apiConfig";
import { setCookies, useAppDispatch, useAppSelector } from "@/redux/slices";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetCookies = () => {
  const dispatch = useAppDispatch();
  const { cookies } = useAppSelector((state) => state.user);
  const res = useQuery<string>({
    queryKey: [ReactQueryKey.COOKIES],
    queryFn: async () => {
      const response = await fetch(apiRouteLocal.cookies).then((res) =>
        res.json()
      );
      dispatch(setCookies(response));
      return response;
    },
    enabled: !cookies,
  });

  return { ...res, token: cookies };
};

export default useGetCookies;
