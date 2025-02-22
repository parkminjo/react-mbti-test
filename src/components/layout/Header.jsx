import { Link } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";

const Header = () => {
  const { isLogin, setIsLogin } = useAuthStore((state) => state);

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authStore");
  };

  /** UI */
  return (
    <div className="px-8 text-white bg-black p-4">
      <div className="flex mx-auto justify-between items-center">
        <Link
          to={"/"}
          className="font-semibold text-2xl transition delay-100 duration-200 ease-in-out hover:text-gray-300"
        >
          MBTI
        </Link>
        {isLogin ? (
          <div className="flex gap-5">
            <Link
              to={"/profile"}
              className="text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-blue-400"
            >
              프로필
            </Link>
            <Link
              to={"/test"}
              className="text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-blue-400"
            >
              테스트
            </Link>
            <Link
              to={"/all-test-results"}
              className="text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-blue-400"
            >
              결과 보기
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-white"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-white"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
