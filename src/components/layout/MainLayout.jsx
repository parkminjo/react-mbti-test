import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <div className="mt-[46px] mx-8 pt-10 flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
