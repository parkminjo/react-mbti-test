import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/results" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
