"use client";

import { apiRouteLocal } from "@/app/api/apiConfig";
import { setUser, useAppDispatch, useAppSelector } from "@/redux/slices";
import { User } from "@/types";
import { ReactQueryKey } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useGetUser = () => {
  const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();
  const res = useQuery<User>({
    queryKey: [ReactQueryKey.USER],
    queryFn: async () => {
      const response = await fetch(apiRouteLocal.user).then((res) =>
        res.json()
      );
      dispatch(setUser(response));
      return response;
    },
    enabled: !user,
  });

  return { ...res, user };
};

export default useGetUser;
