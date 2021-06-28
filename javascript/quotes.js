const quotes = [
  {
    quote: "머리에서 나온 것은 그것이 나온 곳의 빛깔을 지니고, 가슴에서 나온 것은 그 태어난 곳의 열기와 색깔을 지닌다.",
    author: "올리버 웬델 홈즈 Sr.",
  },
  {
    quote: "자신 있게 자신의 꿈을 향해 나아가고, 자신이 꿈꾸는 삶을 살기 위해 노력한다면, 평범한 순간에 예기치 못한 성공을 만날 것이다.",
    author: "헨리 데이비드 소로",
  },
  {
    quote: "자신의 삶에 대해 스스로 책임지려는 의지는 자존감의 원천이다.",
    author: "조앤 다디온",
  },
  {
    quote: "오직 당신만이 채울 수 있는 자리가 있다.",
    author: "마이클 맥린",
  },
  {
    quote: "과거 속에 살지 말고, 미래를 꿈꾸지 말고, 현재 이 순간에 마음을 집중하라.",
    author: "부처",
  },
  {
    quote: "성공은 꿈꾸고, 믿고, 대담해지고, 실천하는 데서 오는 것이다.",
    author: "존 디줄리어스 3세",
  },
  {
    quote: "당신과 나는 본질적으로 끝없는 선택을 한다. 우리에게는 매 순간 모든 가능성이 열려 있으며, 우리는 끝없이 선택의 기회를 갖는다",
    author: "디팩 초프라",
  },
  {
    quote: "사람의 철학은 말로는 제대로 표현되지 않는다. 그것은 선택으로 표현될 뿐이다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "당신의 미래는 많은 것에 달려 있으며 그 대부분은 당신에게 달려 있다.",
    author: "프랭크 타이거",
  },
  {
    quote: "바퀴가 한 방향으로 반듯하게 정렬되면 차가 부드럽게 달리고, 더 적은 에너지로 더 빨리, 더 멀리 갈 수 있듯이 사고, 기분, 감정, 목표, 가치가 균형을 이룰 때 더 좋은 성과를 내게 된다.",
    author:"브라이언 트레이시",
  },
  {
    quote: "안전이 보장된다는 것은 대부분 미신이다. 안전은 어디에도 존재하지 않는다. 인생은 과감한 모험이거나 아니면 아무것도 아니다.",
    author: "헬렌 켈러",
  },
  {
    quote: "내가 어렵게 배운 것 중 하나는 낙심해 봐야 득이 되지 않는다는 것이다. 계속 바쁘게 생활하고 낙관적 삶의 태도를 유지할 때만 자신에 대한 믿음을 회복할 수 있다",
    author: "루실 볼",
  },
  {
    quote: "다른 사람의 마음에 다가가는 가장 좋은 방법은 그가 가장 소중히 여기는 것들에 대해 대화를 나누는 것이다.",
    author: "데일 카네기",
  },
  {
    quote: "자신의 독창성을 당신의 삶과 세상에 펼쳐 내는 것은 당신에게 가장 중요한 일이 될 수 있다.",
    author: "로나 캐트퍼드",
  },
  {
    quote: "인생의 위대한 목표는 지식이 아니라 행동이다.",
    author: "올더스 헉슬리",
  },
  {
    quote: "인생은 다음 두 가지로 성립된다. '하고 싶지만 할 수 없다'와 '할 수 있찌만 하고 싶지 않다.'",
    author: "괴테",
  },
  {
    quote: "그대를 괴롭히고 슬프게 하는 일들을 하나의 시련이라고 생각하라. 쇠는 불에 달구어야 강해진다.",
    author: "마르쿠스 아우렐리우스",
  },
  {
    quote: "어제는 어젯밤에 끝났다. 오늘은 새로운 시작이다. 잊는 기술을 배우고, 앞으로 전진하라!",
    author: "노먼 필",
  },
  {
    quote: "행동의 씨앗을 뿌리면 습관의 열매가 열리고, 습관의 씨앗을 뿌리면 성격의 열매가 열린다. 그리고 성격의 씨앗을 뿌리면 운명의 열매가 맺힌다.",
    author: "나폴레옹",
  },
  {
    quote: "문제를 두려워 마라. 문제의 열쇠는 자신의 내부에 있다. 인생의 승자는 그것을 누가 먼저 발견했느냐에 따라 달려 있다.",
    author: "로버트 슐러",
  },
  {
    quote: "자신의 업무에 대한 정확한 모교를 갖고 있지 않은 사람이 인재가 될 확률을 0.000001퍼센트보다도 낮다.",
    author: "피터 드러커",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[parseInt(Math.random()*quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `by. ${todaysQuote.author}`