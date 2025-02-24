import TestResultList from "../components/features/test-all-result-page/TestResultList";
import { TwText } from "../styles/TwTextStyle";

const AllTestResultPage = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h1 className={TwText.titleStyle}>모든 MBTI 테스트 결과</h1>
      <TestResultList />
    </div>
  );
};

export default AllTestResultPage;
