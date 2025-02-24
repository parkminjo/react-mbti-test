import { useDeleteTestResult } from "../../../hooks/useDeleteTestResult";
import { useUpdateTestVisibility } from "../../../hooks/useUpdateTestVisibility";
import { TwText } from "../../../styles/TwTextStyle";
import { mbtiDescriptions } from "../../../utils/mbtiCalculator";
import useAuthStore from "../../../zustand/authStore";
import KakaoShareButton from "./KakaoShareButton";

const TestResultItem = ({ result }) => {
  const { id, nickname, mbtiResult, userId, date, visibility } = result;

  const myMbtiDescription = mbtiDescriptions[mbtiResult].split(":");
  const { userInfo } = useAuthStore((state) => state);
  const isOwner = userId === userInfo.userId;

  const deleteTestResultMutation = useDeleteTestResult();
  const updateVisibilityMutation = useUpdateTestVisibility();

  /** UI */
  return (
    <div className={containerStyle}>
      <div className="flex justify-between items-baseline">
        <h1 className={TwText.subTitleStyle}>{nickname}</h1>
        <p className="text-gray-500">{date}</p>
      </div>
      <div>
        <h1 className={TwText.titleStyle}>{myMbtiDescription[0]}</h1>
        <p className="text-lg/8">{myMbtiDescription[1]}</p>
      </div>
      {isOwner && (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => updateVisibilityMutation.mutate({ id, visibility })}
            className={visibilityButtonStyle}
          >
            {visibility ? "비공개 하기" : "공개 하기"}
          </button>
          <KakaoShareButton
            userInfo={{ nickname, mbtiResult }}
            buttonStyle={buttonStyle}
          />
          <button
            onClick={() => deleteTestResultMutation.mutate(id)}
            className={deleteButtonStyle}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;

/** Tailwind Style */
const containerStyle =
  "max-w-[600px] bg-gray-200 rounded-lg flex flex-col gap-3 mb-10 p-5";

const visibilityButtonStyle =
  "w-[100px] sm:w-[100px] h-[40px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600";

const deleteButtonStyle =
  "w-[50px] sm:w-[60px] h-[40px] rounded-lg text-white bg-red-500 transition delay-100 duration-200 ease-in-out hover:bg-red-600";

const buttonStyle =
  "w-[120px] sm:w-[120px] bg-yellow-300 rounded-lg transition delay-100 duration-200 ease-in-out hover:bg-yellow-400";
