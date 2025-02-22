import { useTestResults } from "../../../hooks/useTestResults";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
  const { data: testResults, isPending, isError } = useTestResults();

  /** UI */
  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>데이터를 가져오는 중 에러가 발생하였습니다.</p>;
  }

  return (
    <div>
      {testResults.toReversed().map((result) => {
        return <TestResultItem key={result.id} result={result} />;
      })}
    </div>
  );
};

export default TestResultList;
