# 📝 Personal Project: MBTI 성격 유형 테스트

### 🕰️ 개발 기간
25.02.20 ~ 25.02.24

### ⚙️ 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-%23FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-%2320232a?style=for-the-badge&logo=zustand&logoColor=white)

### 🖥 데모
[MBTI 테스트](https://mbti-freetest.vercel.app/)

---
# 📢 프로젝트 소개
MBTI 성격 유형 테스트를 제공하고, 테스트 결과를 확인할 수 있는 웹 애플리케이션입니다.

모바일에서도 원활하게 사용할 수 있도록 반응형 디자인을 적용하여, 다양한 디바이스에서 최적화된 UI를 경험할 수 있습니다.

## 목적
- 실무에서 자주 활용되는 회원가입/로그인, 프로필 관리, 데이터 저장 기능 다뤄보기
- Rest API와의 통신을 통해 실제 데이터 관리 및 서버와의 연동 경험해보기

## 주요 기능
1️⃣ JWT 인증 서버를 통한 회원가입/로그인 기능

2️⃣ JWT 인증 서버를 통한 프로필 수정 기능

3️⃣ MBTI 테스트 기능 및 결과 확인

4️⃣ 카카오톡 공유하기 기능

5️⃣ tanstackQuery를 통한 서버 상태 관리

6️⃣ Zustand와 localStorage를 통한 클라이언트 상태 관리

---
# 💻 기능 소개
## 1️⃣ JWT 인증을 통한 회원가입/로그인 기능
사용자는 JWT 인증 서버를 통해 회원가입 및 로그인할 수 있습니다.

axios를 사용하여 REST API와 통신하고, 로그인 후 토큰을 이용해 인증을 처리합니다.

![회원가입:로그인](https://github.com/user-attachments/assets/806df596-f482-4496-8122-c630a3bf404d)

## 2️⃣ JWT 인증 서버를 통한 프로필 수정 기능
사용자는 자신의 닉네임과 MBTI 유형을 수정할 수 있으며, 해당 내용은 실시간으로 업데이트됩니다.

![프로필수정](https://github.com/user-attachments/assets/84f17257-8f52-41f0-a8cd-f0bb176554aa)

## 3️⃣ MBTI 테스트 기능 및 결과 확인
MBTI 테스트를 진행하고 자신이 어떤 유형인지 결과를 확인할 수 있습니다.

또한, 공개된 다른 사용자들의 테스트 결과도 확인할 수 있습니다.

![테스트](https://github.com/user-attachments/assets/449dc630-7021-4969-8473-35b8934afbd8)

## 4️⃣ 카카오톡 공유하기 기능
 MBTI 테스트 결과를 카카오톡으로 주변 사람들과 공유할 수 있습니다.

## 5️⃣ tanstackQuery를 통한 서버 상태 관리
tanStack Query를 사용하여 서버 상태를 관리하고, 데이터 변경 시 UI가 자동으로 업데이트 되도록 구현하였습니다.

## 6️⃣ Zustand와 localStorage를 통한 클라이언트 상태 관리
Zustand로 사용자 정보(닉네임, MBTI 등)와 로그인 상태를 관리합니다.

localStorage를 사용하여 새로고침 시에도 사용자가 로그인 상태를 유지할 수 있게 하였습니다.

---
# 🔥 트러블 슈팅
[JSON 데이터를 get했는데 네가 왜 거기서 나와?](https://home1204.tistory.com/114)

[왜 함수형 업데이트를 하면 기존의 데이터가 사라지게 될까?](https://home1204.tistory.com/115)

[닉네임을 변경했는데 왜 변경사항이 없다고 하죠?](https://home1204.tistory.com/116)

---
# 🌟 느낀점
새로운 기술을 하루 만에 익히고 바로 프로젝트에 적용하는 것은 쉽지 않았습니다. 그러나 axios, TanStack Query, Zustand를 사용하면서 각 기술의 사용법과 흐름을 머릿속에 정리하고, 이를 실제 프로젝트에 반영해보니 프로젝트를 수월하게 마무리할 수 있었습니다.

TanStack Query를 사용하면서 외부 서버에서 갱신된 데이터를 UI에 즉시 반영할 수 있다는 점에서 큰 장점을 느꼈습니다. UI를 업데이트하는 코드를 추가로 작성하지 않아도 되어 코드의 가독성을 향상시킬 수 있었습니다.

Zustand는 Redux와 비교했을 때 훨씬 더 간편하게 클라이언트 상태 관리를 할 수 있었습니다. 하나의 store 파일만 만들어서 이용할 수 있어, Redux를 사용하면서 겪은 복잡성을 크게 줄일 수 있었습니다.

---
# 🧬 프로젝트 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜axiosInstance.js
 ┃ ┗ 📜testResults.js
 ┣ 📂components
 ┃ ┣ 📂features
 ┃ ┃ ┣ 📂all-test-result-page
 ┃ ┃ ┃ ┣ 📜KakaoShareButton.jsx
 ┃ ┃ ┃ ┣ 📜TestResultItem.jsx
 ┃ ┃ ┃ ┗ 📜TestResultList.jsx
 ┃ ┃ ┣ 📂login-signup
 ┃ ┃ ┃ ┗ 📜AuthForm.jsx
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┗ 📜Card.jsx
 ┃ ┃ ┣ 📂my-test-result
 ┃ ┃ ┃ ┗ 📜MyResultItem.jsx
 ┃ ┃ ┗ 📂test-page
 ┃ ┃ ┃ ┗ 📜TestForm.jsx
 ┃ ┗ 📂layout
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜MainLayout.jsx
 ┣ 📂constants
 ┃ ┣ 📜authConstants.js
 ┃ ┣ 📜constants.js
 ┃ ┣ 📜errorMessages.js
 ┃ ┣ 📜infoMessages.js
 ┃ ┗ 📜routerPathConstants.js
 ┣ 📂data
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📜cardContentList.js
 ┃ ┗ 📂test-page
 ┃ ┃ ┗ 📜question.js
 ┣ 📂hooks
 ┃ ┣ 📜useAddTestResult.js
 ┃ ┣ 📜useDeleteTestResult.js
 ┃ ┣ 📜useTestResults.js
 ┃ ┗ 📜useUpdateTestVisibility.js
 ┣ 📂pages
 ┃ ┣ 📜AllTestResultPage.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜Main.jsx
 ┃ ┣ 📜MyTestResult.jsx
 ┃ ┣ 📜Profile.jsx
 ┃ ┣ 📜Signup.jsx
 ┃ ┗ 📜TestPage.jsx
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┗ 📜TwTextStyle.js
 ┣ 📂utils
 ┃ ┗ 📜mbtiCalculator.js
 ┣ 📂zustand
 ┃ ┗ 📜authStore.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
