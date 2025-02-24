import { useEffect } from "react";
const { Kakao } = window;

const KakaoShareButton = ({ nickname, mbtiResult }) => {
  const vercelUrl = "http://mbti-freetest.vercel.app/";

  useEffect(() => {
    if (!Kakao) return;
    if (!Kakao.isInitialized()) {
      Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "MBTI 테스트 결과 공유",
        description: `${nickname}의 MBTI는 ${mbtiResult}입니다.`,
        imageUrl: "https://ifh.cc/g/YkWFfR.png",
        link: {
          mobileWebUrl: vercelUrl + `my-test-result?mbti=${mbtiResult}`,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: vercelUrl,
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={shareKakao}
      className="w-[140px] bg-yellow-300 rounded-lg transition delay-100 duration-200 ease-in-out hover:bg-yellow-400"
    >
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
