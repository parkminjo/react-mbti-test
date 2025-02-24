import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import useAuthStore from "../zustand/authStore";
import { TwText } from "../styles/TwTextStyle";
import Card from "../components/features/main/Card";
import { cardContentList } from "../data/main/cardContentList";

const Main = () => {
  /** State */
  const { isLogin } = useAuthStore((state) => state);

  /** Function */
  const handleClick = () => {
    if (!isLogin) {
      toast.error(ERROR_MESSAGES.LOGIN_CHECK);
    }
  };

  /** UI */
  return (
    <div className="w-full md:w-1024 flex flex-col justify-center items-center">
      <h1 className={TwText.titleStyle}>무료 성격 테스트</h1>
      <p className={TwText.contentStyle}>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
        {cardContentList.map((cardContent) => {
          return <Card key={cardContent.id} cardContent={cardContent} />;
        })}
      </div>
      <Link to={"/test"}>
        <button onClick={handleClick} className={buttonStyle}>
          내 셩격 알아보러 가기
        </button>
      </Link>
    </div>
  );
};

export default Main;

/** Tailwind Style */
const buttonStyle =
  "w-[200px] rounded-full p-3 text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600";
