import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTestResult } from "../../../api/testResults";
import { mbtiDescriptions } from "../../../utils/mbtiCalculator";

const TestResultItem = ({ result }) => {
  const queryClient = useQueryClient();
  const { id, nickname, mbtiResult, date, visibility } = result;
  const myMbtiDescription = mbtiDescriptions[mbtiResult].split(":");

  const deleteMutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["testResults"],
      });
    },
  });

  return (
    <div className="max-w-[600px] bg-gray-200 rounded-lg flex flex-col gap-3 mb-10 p-5">
      <div className="flex justify-between items-baseline">
        <h1 className="text-xl font-medium">{nickname}</h1>
        <p className="text-gray-500">{date}</p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold mb-2">{myMbtiDescription[0]}</h1>
        <p className="text-lg/8">{myMbtiDescription[1]}</p>
      </div>
      <div className="flex justify-end gap-2">
        <button className="w-[100px] h-[40px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600">
          공개로 전환
        </button>
        <button
          onClick={() => deleteMutation.mutate(id)}
          className="w-[60px] h-[40px] rounded-lg text-white bg-red-500 transition delay-100 duration-200 ease-in-out hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TestResultItem;
