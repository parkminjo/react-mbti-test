import TestResultList from "../components/features/test-all-result-page/TestResultList";

const AllTestResultPage = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h1 className="text-3xl font-semibold mb-8">모든 MBTI 테스트 결과</h1>
      <TestResultList />
    </div>
  );
};

export default AllTestResultPage;
