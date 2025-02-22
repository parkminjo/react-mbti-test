import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestAllResultPage from "../pages/TestAllResultPage";
import TestPage from "../pages/TestPage";
import useAuthStore from "../zustand/authStore";
import MyTestResult from "../pages/MyTestResult";

const PrivateRoute = () => {
  const { isLogin } = useAuthStore((state) => state);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const { isLogin } = useAuthStore((state) => state);
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/my-test-result" element={<MyTestResult />} />
            <Route path="/all-test-results" element={<TestAllResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
