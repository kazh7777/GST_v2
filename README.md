## Game Schedule Tracker 버전 2
<hr>

### 리팩토링 내용

#### 기능 모듈화 
❌ 기존에는 서버 내 기능이 server.js 파일에 모두 구현<br>
❌ 오류 발생 시 문제 파악 및 수정이 어려움<br>

✅ 기능별 파일 분리, 라우터 및 미들웨어 분리<br>
✅ 850줄 서버 코드 -> 12줄로 단축<br>

#### 커넥션 풀링 도입
❌ 기존 커넥션 방식에서는 여러 비동기 함수 실행으로 커넥션 종료 문제 발생<br>
<br>
✅ 커넥션 풀링 방식을 도입 <br>
✅ 커넥션 풀로 미리 생성된 커넥션 객체를 관리하여 필요할 때마다 커넥션을 얻고 반환함으로써 효율적인 데이터베이스 연결 및 종료 가능.


<hr>

<div align=left> 
<br>
  
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 

<br>

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
