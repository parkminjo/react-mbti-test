import TestForm from "../components/features/test-page/TestForm";

const TestPage = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h1 className="text-3xl font-semibold mb-8">MBTI 테스트</h1>
      <TestForm />
    </div>
  );
};

export default TestPage;
