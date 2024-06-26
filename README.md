## 멋쟁이사자처럼 12기 클론코딩 과제

이번 시간에는 그동안 배운 styled component와 React hook(useState, useEffect)을 사용하여 직접 클론코딩을 진행해볼 겁니다.
이전 세션에 비해 다소 난이도가 올라갈 수 있으나 실제 구현되어있는 서비스를 직접 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없으니까요.
모두 화이팅!

## 실습 진행방법

이번 주차는 과제 중심으로 세션이 진행됩니다!
직접 Component를 만들어서 아래의 홈페이지와 같은 페이지를 구현해보세요.

https://getbootstrap.com/docs/4.3/examples/album/

- Icon 이미지 가져오기 : https://heroicons.com

### 어른 사자의 길

1. 우측 상단 햄버거 버튼 클릭 시 진행되는 동적 기능
2. 기타 애니메이션 효과
3. 하단 Footer

## 구현 화면

![image](https://github.com/hyuke81/FE-react-styled-component-clonecoding/assets/163503680/6bc2ffb4-478d-4011-8860-0f6432f43e10)
![image](https://github.com/hyuke81/FE-react-styled-component-clonecoding/assets/163503680/ac0be7fd-aa8f-4888-9a05-540c30876488)


## 구현 조건

1. `components`, `assets`, `pages` 3개의 폴더로 구분하여 개발합니다.
   - components 폴더엔 내가 구현한 컴포넌트들을, assets 에는 이미지 파일들을, pages 에는 내가 보여줄 페이지 컴포넌트를 위치시킵니다.
2. 상단에 `Header`는 스크롤하여도 화면에 고정되어 보이도록 합니다.

## 컴포넌트 계층 구조

주된 컴포넌트인 헤더, 푸터, 포토카드(사진과 글이 있는 것), 버튼에 대해 어떤 계층으로 설계했는지 이곳에 작성해주세요. 그리고 자식 컴포넌트 들에 대해서 어떤 의도를 갖고 설계했는지(ex 정렬하기 위해서, border를 주기 위해서 등) 부담없이 간단하게 적으면 됩니다.
`components`
- `Header` -> const Headline
    - `HeaderWrapper`: 상단 고정 position: fixed, top, z-index
       - `Homesvg`
       - `Albumtxt`
       - `Button`
- `banner` -> const bannertext
    - `Main`
    - `Secondtxt`: 자간 1.7
- `button` -> const Mainbutton
    - `Wrapper`: 가로배치
       - `Button1` `Button2`: hover, focus 사용
- `photocards` -> const Card
    - `Wrapper`: 세로배치
       - `Photo`: 넘치는 부분 숨기기
       - `Textbox`
       - `Buttoncontainer`
          - `Button1` `Button2` : hover 사용
       - `Timetext`
- `footer` -> const Footer
    - `Wrapper`
       - `Copytxt`
       - `Toptxt`

`pages`
- `const Head`
- `Banner`
   - `Textwrapper`: 가로 배치
- `Album`
   - `Wrapper`: height: fit-content
   - `Displaybox`: grid, gap, padding 사용
- `const Foot`

App.jsx

- `Fix`: 가로 넘치는 부분 잘려서 보이지 않게
- ![image](https://github.com/hyuke81/FE-react-styled-component-clonecoding/assets/163503680/c4ddd1d2-b2c1-46c2-a5dd-e1203c063401)
