import { Link } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";
import clsx from "clsx";
import { PATH } from "../../constants/routerPathConstants";

const Header = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const setIsLogin = useAuthStore((state) => state.setIsLogin);

  const navList = [
    { to: PATH.PROFILE, label: "프로필" },
    { to: PATH.TEST, label: "테스트" },
    { to: PATH.ALL_TEST_RESULTS, label: "결과 보기" },
  ];

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.clear();
  };

  /** UI */
  return (
    <div className="fixed w-full px-8 text-white bg-black p-4">
      <div className="flex mx-auto justify-between items-center">
        <Link to={PATH.MAIN} className={logoStyle}>
          MBTI
        </Link>
        {isLogin ? (
          <div className="flex gap-3 sm:gap-5">
            {navList.map(({ to, label }) => (
              <Link
                to={to}
                key={label}
                className={clsx(baseLinkStyle, "hover:text-blue-400")}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className={clsx(baseLinkStyle, "hover:text-white")}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link
            to={PATH.LOGIN}
            className={clsx(baseLinkStyle, "hover:text-white")}
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

/** Tailwind Style */
const logoStyle =
  "font-semibold text-2xl transition delay-100 duration-200 ease-in-out hover:text-gray-300";

const baseLinkStyle =
  "text-gray-300 transition delay-100 duration-200 ease-in-out";
