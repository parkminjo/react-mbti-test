import { useTestResults } from "../../../hooks/useTestResults";
import { TwText } from "../../../styles/TwTextStyle";
import useAuthStore from "../../../zustand/authStore";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
  const { data: testResults, isPending, isError } = useTestResults();
  const { userInfo } = useAuthStore((state) => state);

  if (isPending) {
    return (
      <div className="w-full max-w-[600px] h-[300px] bg-gray-200 rounded-lg flex justify-center items-center mb-10">
        <h1 className={TwText.subTitleStyle}>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return <p className="mt-5">데이터를 가져오는 중 에러가 발생하였습니다.</p>;
  }

  /** 공개된 테스트 결과와 본인 테스트 결과 */
  const filteredTestResults = testResults.filter(
    (result) => result.visibility || result.userId === userInfo.userId
  );

  /** UI */
  return (
    <div>
      {filteredTestResults.toReversed().map((result) => {
        return <TestResultItem key={result.id} result={result} />;
      })}
    </div>
  );
};

export default TestResultList;
