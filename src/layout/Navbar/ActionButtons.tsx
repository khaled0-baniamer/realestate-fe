import { Modal } from "@/components";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import { useRegister } from "@/hooks";

const ActionButtons: React.FC = () => {
  const {
    handleLogout,
    handleToggleLoginModal,
    handleToggleSingupModal,
    isLoading,
    isPending,
    token,
    loginModal,
    signupModal,
  } = useRegister();

  if (isLoading || isPending) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Modal onClose={handleToggleSingupModal} isOpen={signupModal}>
        <SignUpForm handleClose={handleToggleSingupModal} />
      </Modal>

      <Modal onClose={handleToggleLoginModal} isOpen={loginModal}>
        <LoginForm handleClose={handleToggleLoginModal} />
      </Modal>
      {token ? (
        <>
          <div
            onClick={handleLogout}
            className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 cursor-pointer"
          >
            Logout
          </div>
        </>
      ) : (
        <>
          <div
            onClick={handleToggleLoginModal}
            className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-dark md:block cursor-pointer bg-gray-100 border-gray-300"
          >
            Sign In
          </div>
          <div
            onClick={handleToggleSingupModal}
            className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 cursor-pointer"
          >
            Sign Up
          </div>
        </>
      )}
    </>
  );
};

export default ActionButtons;
