import { ListingCard, SectionTitle } from "@/components";
import { useGetListings } from "@/hooks";


const LastestListings: React.FC = () => {
  const { isLoading, data } = useGetListings();
  if (isLoading) {
    return (
      <div className="container bg-gray-light dark:bg-bg-color-dark items-center justify-center flex py-16 md:py-20 lg:py-28 my-5">
        loading...
      </div>
    );
  }

  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 my-5">
      <div className="container">
        <SectionTitle
          title="Our Latest LListings"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            loading..
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {data?.data?.map((listing) => (
              <div key={listing.id} className="w-full">
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LastestListings;
