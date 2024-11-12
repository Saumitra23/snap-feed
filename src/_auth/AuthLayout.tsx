import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  let isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-coll">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat flex-col"
            alt="logo"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
