import { useEffect } from "react";
import { KAKAO_IMG_URL } from "../../../constants/constants";
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

  /** 카카오톡으로 공유하는 함수 */
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "MBTI 테스트 결과 공유",
        description: `${nickname}님의 MBTI는 ${mbtiResult}입니다.`,
        imageUrl: `${KAKAO_IMG_URL}`,
        link: {
          mobileWebUrl: vercelUrl,
        },
      },
      buttons: [
        {
          title: "테스트 하러가기",
          link: {
            mobileWebUrl: vercelUrl,
          },
        },
      ],
    });
  };

  return (
    <button onClick={shareKakao} className={buttonStyle}>
      카카오톡 공유
    </button>
  );
};

export default KakaoShareButton;
