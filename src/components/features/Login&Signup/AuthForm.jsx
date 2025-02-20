import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
  const isLogin = type === "login";

  /** UI */
  return (
    <div className={containerStyle}>
      <h1 className="text-2xl font-semibold text-center">
        {isLogin ? "로그인" : "회원가입"}
      </h1>
      <form className={formStyle}>
        <input type="text" placeholder="아이디" className={inputStyle} />
        <input type="password" placeholder="비밀번호" className={inputStyle} />
        {!isLogin && (
          <>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className={inputStyle}
            />
            <input type="text" placeholder="닉네임" className={inputStyle} />
          </>
        )}
        <button className={buttonStyle}>
          {isLogin ? "로그인하기" : "가입하기"}
        </button>
      </form>
      <div className="flex gap-1">
        <span>
          {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
        </span>
        <Link to={isLogin ? "/signup" : "/login"} className="text-blue-500">
          {isLogin ? "회원가입" : "로그인"}
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
  "w-[320px] h-[40px] p-6 rounded-lg border-2 border-solid border-gray-300";

const buttonStyle =
  "w-[320px] p-4 rounded-lg leading-none bg-blue-500 text-white";
