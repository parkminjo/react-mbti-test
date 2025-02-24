import TestForm from "../components/features/test-page/TestForm";
import { TwText } from "../styles/TwTextStyle";

const TestPage = () => {
  return (
    <div className="flex flex-col items-center mb-20">
      <h1 className={TwText.titleStyle}>MBTI 테스트</h1>
      <TestForm />
    </div>
  );
};

export default TestPage;
