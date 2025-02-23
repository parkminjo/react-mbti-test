import { useState } from "react";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { Link } from "react-router-dom";

const Profile = () => {
  const { accessToken, userInfo, setUserInfo } = useAuthStore((state) => state);

  const [userProfile, setUserProfile] = useState({
    nickname: userInfo.nickname,
    mbti: userInfo.mbtiResult || null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserProfile({ ...userProfile, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProfile({
      token: accessToken,
      nickname: userProfile.nickname,
    });
    setUserInfo({
      nickname: userProfile.nickname,
      mbtiResult: userProfile.mbti,
    });
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
            value={userProfile.nickname}
            onChange={handleChange}
            className={inputStyle}
          />
          <div className="flex justify-between">
            <label htmlFor="mbti">MBTI</label>
            <Link
              to={`/my-test-result?mbti=${userProfile.mbti}`}
              className="text-gray-500"
            >
              내 결과 보러가기
            </Link>
          </div>
          <input
            type="text"
            placeholder="MBTI"
            id="mbti"
            value={userProfile.mbti}
            onChange={handleChange}
            className={inputStyle}
          />
          <button type="submit" className={buttonStyle}>
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
const buttonStyle =
  "h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600";
