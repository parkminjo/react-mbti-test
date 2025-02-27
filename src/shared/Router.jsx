import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AllTestResultPage from "../pages/AllTestResultPage";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MyTestResult from "../pages/MyTestResult";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import useAuthStore from "../zustand/authStore";
import { PATH } from "../constants/routerPathConstants";

const PrivateRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route element={<PublicRoute />}>
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.SIGNUP} element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={PATH.PROFILE} element={<Profile />} />
            <Route path={PATH.TEST} element={<TestPage />} />
            <Route path={PATH.MY_TEST_RESULT} element={<MyTestResult />} />
            <Route
              path={PATH.ALL_TEST_RESULTS}
              element={<AllTestResultPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
