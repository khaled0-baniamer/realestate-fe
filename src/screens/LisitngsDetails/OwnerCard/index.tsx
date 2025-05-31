import { useGetCookies } from "@/hooks";
import { setLoginModal, useAppDispatch, useAppSelector } from "@/redux/slices";
import { User } from "@/types";

type Props = {
  ownerData?: User;
};

const OwnerCard: React.FC<Props> = ({ ownerData }) => {
  const { token, isLoading, isRefetching } = useGetCookies();

  const dispatch = useAppDispatch();
  const { loginModal } = useAppSelector((state) => state.registerationModals);

  const handleToggleLoginModal = () => dispatch(setLoginModal(!loginModal));
  ownerData = token ? ownerData : undefined;

  const handleAskOwner = () => {
    if (token) {
      window.open(`tel:${ownerData?.phone}`);
    } else {
      handleToggleLoginModal();
    }
  };

  if (isRefetching || isLoading) {
    return (
      <div className="border h-full rounded-md p-4 shadow-one flex items-center justify-center">
        loading...
      </div>
    );
  }
  return (
    <div className="border h-full rounded-md p-4 shadow-one flex flex-col justify-between">
      <p className="text-lg font-medium my-6">Owner Details</p>
      <div className="h-full space-y-5 ">
        <div className="flex gap-1 h-fit">
          <p className="font-medium min-w-28">Owner Name : </p>
          <p className="font-light">{ownerData?.name ?? "NA"}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-medium min-w-28">Property No. : </p>
          <p className="font-light">{token ? 10 : "NA"}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-medium min-w-28">Email : </p>
          <p className="font-light">{ownerData?.email ?? "NA"}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-medium min-w-28">Phone : </p>
          <p className="font-light">{ownerData?.phone ?? "NA"}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-medium min-w-28">Joining Date : </p>
          <p className="font-light">
            {ownerData?.createdAt
              ? new Date(ownerData?.createdAt ?? "").toLocaleDateString()
              : "NA"}
          </p>
        </div>
      </div>

      <button
        onClick={handleAskOwner}
        className="bg-primary w-full text-white rounded-md py-2 mt-8"
      >
        Ask Owner
      </button>
    </div>
  );
};

export default OwnerCard;
