import { Link, useSearchParams } from "react-router-dom";
import { mbtiDescriptions } from "../../../utils/mbtiCalculator";
import { TwText } from "../../../styles/TwTextStyle";

const MyResultItem = () => {
  const [searchParams] = useSearchParams();
  const myMbti = searchParams.get("mbti");

  /** 해당 MBTI 설명 */
  const myMbtiDescription = mbtiDescriptions[myMbti].split(":");

  /** UI */
  return (
    <div className="max-w-[600px] flex flex-col gap-5">
      <h2
        className={TwText.subTitleStyle}
      >{`당신의 MBTI는 ${myMbtiDescription[0]}입니다.`}</h2>
      <p className="text-lg/8">{myMbtiDescription[1]}</p>
      <Link to={"/all-test-results"}>
        <button className={buttonStyle}>다른 사람 결과 보러 가기</button>
      </Link>
    </div>
  );
};

export default MyResultItem;

/** Tailwind Style */
const buttonStyle =
  "w-[600px] h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600";
