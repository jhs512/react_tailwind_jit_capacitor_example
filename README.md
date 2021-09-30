# 개요
- CRA + 테일윈드 JIT

# 포트 찾고 프로세스 킬
- netstat -a -o
- netstat -a -o | findstr 3000
- taskkill /f /pid 1234
  - 프로세스 번호 1234 에 해당하는 프로세스 킬

# 캐퍼시터 세팅
- npm i -D @capacitor/core @capacitor/cli @capacitor/android
- npx cap init 프로젝트 id --web-dir=build
  - npx cap init exam1 com.jhs.exam1.test --web-dir=build
- npm run build
  - 이걸 해야 함
- npx cap add android
  - 안드로이드 프로젝트 생성
  - 생성된 프로젝트 열기
  - 그래들 업데이트 하라고 나오면 1번 방법으로 업데이트
  - 실행

# 리액트 작업 후 안드로이드 프로젝트에 다시 배포
- npm run build
- npx cap copy android