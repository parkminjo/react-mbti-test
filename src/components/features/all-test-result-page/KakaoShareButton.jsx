import { useEffect } from "react";
import { KAKAO_IMAGE_URL } from "../../../constants/constants";
const { Kakao } = window;

const KakaoShareButton = ({ userInfo, buttonStyle }) => {
  const { nickname, mbtiResult } = userInfo;
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
        description: `${nickname}님의 MBTI는 ${mbtiResult}입니다.`,
        imageUrl: `${KAKAO_IMAGE_URL}`,
        link: {
          mobileWebUrl: vercelUrl,
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
    <button onClick={shareKakao} className={buttonStyle}>
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
