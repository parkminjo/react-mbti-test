import { useState } from "react";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Profile = () => {
  const { accessToken, userInfo, setUserInfo } = useAuthStore((state) => state);

  const [nickname, setNickname] = useState(userInfo.nickname);

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProfile({ token: accessToken, nickname });
    setUserInfo({ nickname });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-semibold">{`${userInfo.nickname}님의 프로필`}</h1>
      <form onSubmit={handleSubmit}>
        <div className="max-w-[600px] rounded-lg flex flex-col gap-3 mb-10 p-5">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            placeholder="닉네임"
            id="nickname"
            value={nickname}
            onChange={handleChange}
            className={inputStyle}
          />
          <button
            type="submit"
            className="h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600"
          >
            프로필 업데이트
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

const inputStyle =
  "w-[320px] h-[40px] p-6 rounded-lg border-2 border-solid border-gray-300 transition delay-100 duration-200 ease-in-out hover:border-gray-400";
