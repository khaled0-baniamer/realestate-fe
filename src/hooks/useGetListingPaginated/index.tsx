"use client";
import { apiRouteLocal } from "@/app/api/apiConfig";
import { HeroSearchState, ListingsApiResponse, Property } from "@/types";
import {
  convertObjectValuesToStrings,
  parsePropertyImage,
  ReactQueryKey,
} from "@/utils";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchListings = async ({
  pageParam = 1,
  filters,
}: {
  pageParam: number;
  filters: HeroSearchState;
}): Promise<ListingsApiResponse> => {
  const params = convertObjectValuesToStrings({ ...filters, page: pageParam });
  const filtersParams = new URLSearchParams(params).toString();

  const response = await fetch(`${apiRouteLocal.listings}?${filtersParams}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetListingPaginated = (filters: HeroSearchState) => {
  const res = useInfiniteQuery({
    queryKey: [ReactQueryKey.PAGINATION_LISTINGS, filters],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => fetchListings({ pageParam, filters }),
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
    select: (data) => ({
      ...data,
      pages: data.pages.map((page) => ({
        ...page,
        data: page.data.map((property: Property) =>
          parsePropertyImage(property)
        ),
      })),
    }),
  });

  return res;
};

export default useGetListingPaginated;
