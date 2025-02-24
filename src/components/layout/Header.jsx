import { Link } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";

const Header = () => {
  const { isLogin, setIsLogin } = useAuthStore((state) => state);

  const navList = [
    { to: "/profile", label: "프로필" },
    { to: "/test", label: "테스트" },
    { to: "/all-test-results", label: "결과 보기" },
  ];

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.clear();
  };

  /** UI */
  return (
    <div className="px-8 text-white bg-black p-4">
      <div className="flex mx-auto justify-between items-center">
        <Link to={"/"} className={logoStyle}>
          MBTI
        </Link>
        {isLogin ? (
          <div className="flex gap-3 sm:gap-5">
            {navList.map(({ to, label }) => (
              <Link to={to} key={label} className={contentLinkStyle}>
                {label}
              </Link>
            ))}
            <button onClick={handleLogout} className={linkStyle}>
              로그아웃
            </button>
          </div>
        ) : (
          <Link to={"/login"} className={linkStyle}>
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

const contentLinkStyle =
  "text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-blue-400";

const linkStyle =
  "text-gray-300 transition delay-100 duration-200 ease-in-out hover:text-white";
