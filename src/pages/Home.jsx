import { Link } from "react-router-dom";
import Card from "../components/features/home/Card";
import { cardContentList } from "../data/home/cardContentList";

const Home = () => {
  /** UI */
  return (
    <div className="w-screen text-center">
      <h1 className={TitleStyle}>무료 성격 테스트</h1>
      <p className={ContentStyle}>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        {cardContentList.map((cardContent) => {
          return <Card key={cardContent.id} cardContent={cardContent} />;
        })}
      </div>
      <Link to={"/test"}>
        <button className={buttonStyle}>내 셩격 알아보러 가기</button>
      </Link>
    </div>
  );
};

export default Home;

/** Tailwind Style */
const buttonStyle =
  "w-[200px] rounded-full p-3 text-white bg-blue-500 hover:bg-blue-600";

const TitleStyle = "text-5xl font-semibold pb-5";

const ContentStyle = "text-xl text-gray-500 pb-8";
