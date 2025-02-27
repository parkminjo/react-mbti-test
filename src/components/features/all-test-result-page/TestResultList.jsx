import { SPINNER_IMG } from "../../../constants/constants";
import { useGetTestResults } from "../../../hooks/useGetTestResults";
import useAuthStore from "../../../zustand/authStore";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
  const { data: testResults, isPending, isError } = useGetTestResults();
  const userInfo = useAuthStore((state) => state.userInfo);

  if (isPending) {
    return <img src={SPINNER_IMG} alt="스피너 gif" />;
  }

  if (isError) {
    return <p className="mt-5">데이터를 가져오는 중 에러가 발생하였습니다.</p>;
  }

  /** 공개된 테스트 결과와 본인 테스트 결과 */
  const filteredTestResults = testResults.filter(
    (result) => result.visibility || result.userId === userInfo.userId
  );

  if (!filteredTestResults) {
    return <p className="mt-5">테스트 결과가 없습니다.</p>;
  }

  return (
    <>
      {filteredTestResults.toReversed().map((result) => {
        return (
          <TestResultItem key={result.id + result.nickname} result={result} />
        );
      })}
    </>
  );
};

export default TestResultList;
