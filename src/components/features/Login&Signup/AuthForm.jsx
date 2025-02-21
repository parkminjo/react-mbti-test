import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, register } from "../../../api/auth";

const AuthForm = () => {
  /** 경로에 따라 로그인/회원가입 로직이 달라짐 */
  const location = useLocation();
  const type = location.pathname;
  const isLoginType = type === "/login";

  const navigate = useNavigate();

  /** State */
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const { id, password, passwordCheck, nickname } = inputValue;

  /** Function */
  const reset = () => {
    setInputValue({
      id: "",
      password: "",
      passwordCheck: "",
      nickname: "",
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const isLogin = await login({ id, password });
    if (isLogin) {
      reset();
      navigate("/");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const isSignup = await register({ id, password, passwordCheck, nickname });
    if (isSignup) {
      reset();
      navigate("/login");
    }
  };

  /** UI */
  return (
    <div className={containerStyle}>
      <h1 className="text-2xl font-semibold text-center">
        {isLoginType ? "로그인" : "회원가입"}
      </h1>
      <form
        onSubmit={isLoginType ? handleLogin : handleSignup}
        className={formStyle}
      >
        <input
          type="text"
          placeholder="아이디"
          id="id"
          value={id}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type="password"
          placeholder="비밀번호"
          id="password"
          value={password}
          onChange={handleChange}
          className={inputStyle}
        />
        {!isLoginType && (
          <>
            <input
              type="password"
              placeholder="비밀번호 확인"
              id="passwordCheck"
              value={passwordCheck}
              onChange={handleChange}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="닉네임"
              id="nickname"
              value={nickname}
              onChange={handleChange}
              className={inputStyle}
            />
          </>
        )}
        <button className={buttonStyle}>
          {isLoginType ? "로그인하기" : "가입하기"}
        </button>
      </form>
      <div className="flex gap-1">
        <span>
          {isLoginType ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
        </span>
        <Link to={isLoginType ? "/signup" : "/login"} className="text-blue-500">
          {isLoginType ? "회원가입" : "로그인"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;

/** Tailwind Style */
const containerStyle =
  "flex flex-col items-center w-[450px] py-8 gap-4 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.2)]";

const formStyle =
  "flex flex-col items-center gap-4 w-[400px] bg-gray-100 rounded-lg p-5";

const inputStyle =
  "w-[320px] h-[40px] p-6 rounded-lg border-2 border-solid border-gray-300 hover:border-gray-400";

const buttonStyle =
  "w-[320px] p-4 rounded-lg leading-none bg-blue-500 text-white hover:bg-blue-600";
