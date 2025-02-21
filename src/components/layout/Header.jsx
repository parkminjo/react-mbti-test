import { Link } from "react-router-dom";

const Header = () => {
  /** UI */
  return (
    <div className="px-8 text-white bg-black p-4">
      <div className="flex mx-auto justify-between items-center">
        <Link to={"/"} className="font-semibold text-2xl hover:text-gray-300">
          MBTI
        </Link>
        <Link to={"/login"} className="hover:text-gray-300">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Header;
