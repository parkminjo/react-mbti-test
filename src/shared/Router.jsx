import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test-result" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
