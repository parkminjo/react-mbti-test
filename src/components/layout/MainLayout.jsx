import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-center items-center mx-24">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
