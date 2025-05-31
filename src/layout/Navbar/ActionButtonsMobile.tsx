import { useRegister } from "@/hooks";

export default function ActionButtonsMobile() {
  const {
    handleLogout,
    isPending,
    isLoading,
    handleToggleLoginModal,
    handleToggleSingupModal,
    token,
  } = useRegister();

  if (isLoading || isPending) return <div>Loading...</div>;
  return (
    <div className="md:hidden block">
      {token ? (
        <li >
          <div
            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white text-dark hover:text-primary dark:text-white/70 dark:hover:text-white`}
            onClick={handleLogout}
          >
            Logout
          </div>
        </li>
      ) : (
        <>
          <li>
            <div
              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"`}
              onClick={handleToggleLoginModal}
            >
              Login
            </div>
          </li>
          <li>
            <div
              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6  dark:text-white text-dark hover:text-primary dark:text-white/70 dark:hover:text-white`}
              onClick={handleToggleSingupModal}
            >
              Sign Up
            </div>
          </li>
        </>
      )}
    </div>
  );
}
