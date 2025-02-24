import { Link, useSearchParams } from "react-router-dom";
import { mbtiDescriptions } from "../../../utils/mbtiCalculator";
import { TwText } from "../../../styles/TwTextStyle";
import KakaoShareButton from "../all-test-result-page/KakaoShareButton";
import useAuthStore from "../../../zustand/authStore";

const MyResultItem = () => {
  const { userInfo } = useAuthStore((state) => state);

  const [searchParams] = useSearchParams();
  const myMbti = searchParams.get("mbti");

  /** 해당 MBTI 설명 */
  const myMbtiDescription = mbtiDescriptions[myMbti].split(":");

  /** UI */
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-5">
      <h2
        className={TwText.subTitleStyle}
      >{`당신의 MBTI는 ${myMbtiDescription[0]}입니다.`}</h2>
      <p className="text-lg/8">{myMbtiDescription[1]}</p>
      <div className="flex flex-col gap-2">
        <Link to={"/all-test-results"}>
          <button className={allResultButtonStyle}>
            다른 사람 결과 보러 가기
          </button>
        </Link>
        <KakaoShareButton
          userInfo={{ nickname: userInfo.nickname, mbtiResult: myMbti }}
          buttonStyle={buttonStyle}
        />
      </div>
    </div>
  );
};

export default MyResultItem;

/** Tailwind Style */
const allResultButtonStyle =
  "w-full h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600";

const buttonStyle =
  "w-full h-[50px] rounded-lg bg-yellow-300 transition delay-100 duration-200 ease-in-out hover:bg-yellow-400";
