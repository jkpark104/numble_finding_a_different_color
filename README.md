# [Numble Project](https://www.numble.it/45cee9d3-49ad-4f67-9d2a-14607c2eeba7)

- 블로그를 작성할 때는 다음과 같은 내용을 포함해주세요.
  - 주요 코드에 대한 설명
    - 주요 로직(ex. 소비자 구매 로직)과 그 이유
    - 코드 내에서 고려한 특정 유저 행동과 그에 대한 대처
  - 활용한 라이브러리와 그 이유
  - 프로젝트를 진행할 때 어려웠던 점/고민했던 부분과 해결방법

## ■ 요구 사항

![Untitled](Numble%20Project%202381d24385f64c6985dab3b36af543db/Untitled.png)

### Functional Requirements

1. 점수를 표시하는 헤더와 보드의 아이템들로 이루어져 있어야 한다.
2. `Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)` 개의 사각형이 표시되며, 그 중 하나만 색깔이 달라야 한다.
3. 한 stage의 제한 시간은 15초이어야 한다.
4. 색이 다른 사각형(정답)을 클릭한 경우
   1. 다음 스테이지로 넘어가야 한다.
   2. `Math.pow(stage, 3) * 남은시간`만큼의 score가 누적돼야 한다.
5. 오답을 클릭한 경우
   1. 현재 stage의 남은 시간이 3초 줄어들어야 한다.
6. 남은 시간이 0초 이하가 되면 게임이 종료돼야 한다.
7. 게임이 종료되면 최종 stage와 누적 score를 출력하고, 새로운 게임을 시작할 수 있어야 한다.

   ![Untitled](Numble%20Project%202381d24385f64c6985dab3b36af543db/Untitled%201.png)

8. stage가 올라갈수록 정답과 오답의 색상 차이가 줄어들어야 한다.
   - 값의 차이는 ± `diff = 25 - Math.floor((stage + 1) / 3);`의 규칙을 가져야 한다.
   - 값의 차이가 끝값(`0 | 255`)를 넘어갈 때는 `0 | 255`로 설정해야 한다.
9. 문서의 제목은 `Thinking In React`로 지정해야 한다.

### Business Requirements

1. React Framework를 사용해야 한다.
2. Function Component를 활용해야 한다.
3. Typescript를 활용해야 한다.
4. 서버에 배포해야 한다.
5. 상태관리 도구를 사용하지 않아야 한다.

## ■ 마크업

```html
<div id="root">
  <header>
    <h1 class="title"></h1>
    <p></p>
  </header>
  <div class="board"></div>
</div>
<div id="alert" aria-live="assertive" role="alert"></div>
```
