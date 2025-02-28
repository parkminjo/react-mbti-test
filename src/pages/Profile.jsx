import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "../api/auth";
import { QUERY_MBTI, TEST_CHECK_MESSAGE } from "../constants/constants";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { TwText } from "../styles/TwTextStyle";
import useAuthStore from "../zustand/authStore";
import { PATH } from "../constants/routerPathConstants";

const Profile = () => {
  /** State */
  const userInfo = useAuthStore((state) => state.userInfo);
  const { setUserInfo } = useAuthStore((state) => state.actions);

  const [userProfile, setUserProfile] = useState({
    nickname: userInfo.nickname,
    mbti: userInfo.mbtiResult || TEST_CHECK_MESSAGE,
  });

  /** Function */
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserProfile({ ...userProfile, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /** MBTI 형식 검사 */
    const mbtiPattern = /^(?:[EI]{1}[NS]{1}[FT]{1}[JP]{1})$/;
    if (!mbtiPattern.test(userProfile.mbti)) {
      toast.error(ERROR_MESSAGES.MBTI_INPUT_CHECK);
      return;
    }

    /** 프로필 업데이트 */
    await updateProfile({
      nickname: userProfile.nickname,
    });

    /** 사용자 정보 업데이트 */
    setUserInfo({
      nickname: userProfile.nickname,
      mbtiResult: userProfile.mbti,
    });
  };

  /** UI */
  return (
    <div className="w-full flex flex-col items-center">
      <h2
        className={TwText.subTitleStyle}
      >{`${userInfo.nickname}님의 프로필`}</h2>
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
            {!userInfo.mbtiResult ? (
              <Link to={PATH.TEST} className="text-gray-500">
                테스트 하러가기
              </Link>
            ) : (
              <Link
                to={`${PATH.MY_TEST_RESULT}${QUERY_MBTI}${userProfile.mbti}`}
                className="text-gray-500"
              >
                내 결과 보러가기
              </Link>
            )}
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
