"use client";
import React, { useRef, useCallback } from "react";
import { useGetListingPaginated } from "@/hooks";
import Card from "./Card";
import { useAppSelector } from "@/redux/slices";

const ListingsCards: React.FC = () => {
  const heroSearch = useAppSelector((state) => state.heroSearch);
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useGetListingPaginated(heroSearch);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastCardRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isLoading) {
    return (
      <div className="flex w-full justify-center items-center min-h-52">
        loading....
      </div>
    );
  }

  if (!data?.pages.flatMap((e) => e)?.[0]?.data?.length) {
    return (
      <div className="flex w-full justify-center items-center min-h-52">
        There are no Properties exist
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mb-20  ">
        {data?.pages.map((page, pageIndex) =>
          page.data?.map((listing: any, index: number) => {
            const isLastCard =
              pageIndex === data.pages?.length - 1 &&
              index === page.data?.length - 1;
            return (
              <div
                className="col-span-12 md:col-span-8 sm:col-span-6  bg-ye space-y-2"
                key={listing.id}
                ref={isLastCard ? lastCardRef : null}
              >
                <Card data={listing} />
              </div>
            );
          })
        )}
        {/* <div className="bg-red-400 col-span-4">Sidebar content</div> */}
      </div>
      <div className="flex justify-center">
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
};

export default ListingsCards;
