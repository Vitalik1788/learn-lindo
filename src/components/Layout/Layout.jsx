import Navigation from "components/Navigation/Navigation";
import Spinner from "components/Spinner/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;