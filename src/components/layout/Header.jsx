import { Link } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";
import { toast } from "react-toastify";
import { INFO_MESSAGES } from "../../constants/infoMessages";

const Header = () => {
  const { isLogin, setIsLogin } = useAuthStore((state) => state);

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    toast.info(INFO_MESSAGES.LOGOUT_SUCCESS);
  };

  /** UI */
  return (
    <div className="px-8 text-white bg-black p-4">
      <div className="flex mx-auto justify-between items-center">
        <Link to={"/"} className="font-semibold text-2xl hover:text-gray-300">
          MBTI
        </Link>
        {isLogin ? (
          <button onClick={handleLogout} className="hover:text-gray-300">
            로그아웃
          </button>
        ) : (
          <Link to={"/login"} className="hover:text-gray-300">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
