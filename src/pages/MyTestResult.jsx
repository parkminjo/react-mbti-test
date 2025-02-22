import { Link, useSearchParams } from "react-router-dom";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const MyTestResult = () => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  const mbtiDescriptionArr = mbtiDescriptions[mbti].split(":");

  return (
    <div>
      <div className="w-[380px] flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">{`당신은 ${mbtiDescriptionArr[0]}입니다.`}</h1>
        <p className="text-lg/8">{mbtiDescriptionArr[1]}</p>
        <Link to={"/all-test-results"}>
          <button className="w-[380px] h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600">
            다른 사람 결과 보러 가기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyTestResult;
