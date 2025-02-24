import { useEffect } from "react";
const { Kakao } = window;

const KakaoShareButton = () => {
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
        title: "MBTI 테스트 결과",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
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
    <button
      onClick={shareKakao}
      className="w-[140px] bg-yellow-300 rounded-lg transition delay-100 duration-200 ease-in-out hover:bg-yellow-400"
    >
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
