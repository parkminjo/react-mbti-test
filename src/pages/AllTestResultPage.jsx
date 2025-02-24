import TestResultList from "../components/features/all-test-result-page/TestResultList";
import { TwText } from "../styles/TwTextStyle";

const AllTestResultPage = () => {
  return (
    <div className="w-full flex flex-col items-center mb-5 sm:mb-20">
      <h1 className={TwText.titleStyle}>모든 MBTI 테스트 결과</h1>
      <TestResultList />
    </div>
  );
};

export default AllTestResultPage;
