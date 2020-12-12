const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers: ['スーパーファミコン',
    'プレイステーション',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: ['MOTHER2',
    'スーパーマリオ',
    'ドンキーコング',
    '星のカービィ'
    ],
    correct: 'MOTHER2'
  },{
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: ['ティーダ',
    'クラウド',
    'セシル',
    'フリオノール'
    ],
    correct: 'セシル'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
//document.getElementByID('js-question').textContent = quiz[quizIndex].question;
const setUpQuiz = () => {

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
buttonIndex++;
  }
}
setUpQuiz();

const clickHandler = (e) =>  { 
  if(quiz[quizIndex].correct === e.target.textContent ){
  window.alert('正解！');
  score++;
} else {
  window.alert('不正解！');
}

quizIndex++;

if(quizIndex < quizLength) {
  //問題数があれば
setUpQuiz();
}else {
  //問題数がなければ
  window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です');
}
};



let handelerIndex = 0;
while (handelerIndex < buttonLength){
  $button[handelerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handelerIndex++;
}
