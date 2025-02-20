import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-24 py-3 text-white bg-black">
      <ul className="flex justify-between">
        <li className="font-semibold text-2xl">
          <Link to={"/"}>MBTI</Link>
        </li>
        <li>
          <Link to={"/login"}>로그인</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
