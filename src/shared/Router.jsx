import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "../components/layout/MainLayout";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const PrivateRoute = () => {
  const [isLogin] = useState(!!localStorage.getItem("accessToken"));

  useEffect(() => {
    if (!isLogin) toast.error(ERROR_MESSAGES.LOGIN_CHECK);
  }, [isLogin]);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const [isLogin] = useState(!!localStorage.getItem("accessToken"));

  useEffect(() => {
    if (!isLogin) toast.error(ERROR_MESSAGES.LOGIN_CHECK);
  }, [isLogin]);

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
            <Route path="/test-results" element={<TestResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
