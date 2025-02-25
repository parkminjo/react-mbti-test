import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserProfile, login, register } from "../../../api/auth";
import { TwText } from "../../../styles/TwTextStyle";
import useAuthStore from "../../../zustand/authStore";

const AuthForm = () => {
  /** 경로에 따라 로그인/회원가입 로직이 달라짐 */
  const location = useLocation();
  const mode = location.pathname;
  const isLoginMode = mode === "/login";

  const { setIsLogin, setUserInfo } = useAuthStore((state) => state);
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
      setIsLogin(true);

      const { id, nickname } = await getUserProfile();
      setUserInfo({ userId: id, nickname });
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
      <h1 className={TwText.subTitleStyle}>
        {isLoginMode ? "로그인" : "회원가입"}
      </h1>
      <form
        onSubmit={isLoginMode ? handleLogin : handleSignup}
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
        {!isLoginMode && (
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
          {isLoginMode ? "로그인하기" : "가입하기"}
        </button>
      </form>
      <div className="flex gap-1">
        <span>
          {isLoginMode ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
        </span>
        <Link to={isLoginMode ? "/signup" : "/login"} className="text-blue-500">
          {isLoginMode ? "회원가입" : "로그인"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;

/** Tailwind Style */
const containerStyle =
  "flex flex-col items-center w-full max-w-[450px] py-8 gap-4 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.2)]";

const formStyle =
  "flex flex-col items-center gap-4 w-full max-w-[400px] bg-gray-100 rounded-lg p-5";

const inputStyle =
  "w-full max-w-[320px] h-[40px] p-6 rounded-lg border-2 border-solid border-gray-300 transition delay-100 duration-200 ease-in-out hover:border-gray-400";

const buttonStyle =
  "w-full max-w-[320px] p-4 rounded-lg leading-none bg-blue-500 text-white transition delay-100 duration-200 ease-in-out  hover:bg-blue-600";
