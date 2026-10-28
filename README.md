# pwd-week6

pwd-week5 React 앱에 맛집 데이터를 제공하는 Express REST API 서버입니다.

## API

| Method | Path | 설명 |
| --- | --- | --- |
| GET | `/api/restaurants` | 맛집 목록 (배열) |
| GET | `/api/restaurants/popular` | 평점 높은 순 최대 5개 (배열) |
| GET | `/api/restaurants/:id` | 맛집 1개 (객체), 없으면 404 |

## 실행 방법

```bash
npm install
npm start      # 서버 실행 (기본 포트 3000)
npm run dev    # 개발 모드 (파일 변경 시 재시작)
npm test       # 테스트
```
