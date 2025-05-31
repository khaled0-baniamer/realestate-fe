import {
  logout,
  setLoginModal,
  setSignupModal,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import useGetCookies from "../useGetCookies";
import { useMutation } from "@tanstack/react-query";
import { clearCookies } from "@/actions";

const useRegister = () => {
  const { isLoading, token, refetch } = useGetCookies();
  const { isPending, mutate } = useMutation({
    mutationFn: clearCookies,
    onSettled: () => {
      refetch();
    },
  });

  const dispatch = useAppDispatch();
  const { loginModal, signupModal } = useAppSelector(
    (state) => state.registerationModals
  );

  const handleToggleSingupModal = () => dispatch(setSignupModal(!signupModal));
  const handleToggleLoginModal = () => dispatch(setLoginModal(!loginModal));

  const handleLogout = async () => {
    mutate();
    dispatch(logout());
  };

  return {
    isLoading,
    isPending,
    handleToggleLoginModal,
    handleToggleSingupModal,
    handleLogout,
    token,
    loginModal,
    signupModal,
  };
};

export default useRegister;
