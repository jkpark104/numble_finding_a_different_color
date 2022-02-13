# [Numble Project (링크)](https://www.numble.it/45cee9d3-49ad-4f67-9d2a-14607c2eeba7)

## ■ 구현 상세 스펙

![Untitled](https://user-images.githubusercontent.com/87417572/152546106-e1d2717e-3de9-4085-afa1-a69be7b81a4e.png)

1. `Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)` 개의 사각형이 표시되며, 그 중 하나만 색깔이 달라야 한다.
2. 한 stage의 제한 시간은 15초이어야 한다.
3. 색이 다른 사각형(정답)을 클릭한 경우
   - 다음 스테이지로 넘어가야 한다.
   - `Math.pow(stage, 3) * 남은 시간`만큼의 score가 누적돼야 한다.
4. 오답을 클릭한 경우
   - 현재 stage의 남은 시간이 3초 줄어들어야 한다.
5. 남은 시간이 0초 이하가 되면 게임이 종료돼야 한다.
6. 게임이 종료되면 최종 stage와 누적 score를 출력하고, 새로운 게임을 시작할 수 있어야 한다.
7. stage가 올라갈수록 정답과 오답의 색상 차이가 줄어들어야 한다.

### ▶ 임의로 추가한 상세 스펙

1. 정답과 오답의 색상 차이는 ±`25 - Math.floor((stage + 1) / 3)`의 규칙을 가져야 한다.
2. 정답과 오답의 색상 차이의 `최솟값은 1`로 설정해야 한다.
3. 색상 차이를 계산한 10진수 RGB 값이 `0|255`를 초과하면 `0|255`로 설정해야 한다.

## ■ 요구 사항

1. React Framework를 사용할 것
2. Function Component를 활용할 것
3. Javascript보다는 Typescript를 활용할 것
4. 서버에 배포할 것
5. Context, Redux, Mobx, Recoil 등 상태관리 도구를 사용하지 않을 것

## ■ 사용 기술

- Tool : CRA
- Style : Tailwind
- Deploy : Vercel

## ■ 컴포넌트 트리 구성

```bash
App
 ├── Header
 │     ├── HeaderTitle
 │     └── GameInfos
 └── Board
       ├── BoardTitle
       └── BoardItems
```

- 관심사별로 컴포넌트를 분리하고 하위 컴포넌트로의 `props drilling`을 최소화하고자 목표를 세웠다.
- 이를 위해 `컴파운드 컴포넌트` 패턴을 활용했다.

## ■ 배포

- [**https://numble-finding-a-different-color.vercel.app/**](https://numble-finding-a-different-color.vercel.app/)
