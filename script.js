const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.


function calculate(n1, oper, n2) { // n1 = 1, oper = +, n2 = 2
  let result = 0;

  if(oper === '+'){
    result = Number(n1) + Number(n2)
  }else if(oper === '-'){
    result = Number(n1) - Number(n2)
  }else if(oper === '*'){
    result = Number(n1) * Number(n2)
  }else{
    result = Number(n1) / Number(n2)
  }
  
  return String(result);
};


buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if(firstOperend.textContent ==='0'){
        firstOperend.textContent = buttonContent;
      }else{
        secondOperend.textContent = buttonContent; //두번째 operend 입력
      }
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
       console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent ='0'
      secondOperend.textContent = '0'
      operator.textContent='+'
      calculatedResult.textContent='0';
    }

    if (action === 'calculate') {
      let firstOperTextContent=firstOperend.textContent,
          secondOperTextContent=secondOperend.textContent,
          operTextcontent=operator.textContent;

      const result = calculate(
        firstOperTextContent,
        operTextcontent,
        secondOperTextContent
      );
      calculatedResult.textContent = result;
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const clickedOperator = document.querySelectorAll('.operator');

clickedOperator.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('button_clicked');

    setTimeout(() => {
      button.classList.remove('button_clicked');
    }, 200);
  });
});

let firstNum, operatorForAdvanced, previousKey, previousNum;


buttons.addEventListener('click', function (event) {

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if(display.textContent==="0" || previousKey === 'calculate'){
        display.textContent = ''
      }
      display.textContent += buttonContent;
    }
    if (action === 'operator') {
      operatorForAdvanced = buttonContent;
      previousKey = 'operator'
      firstNum =display.textContent;

      if (operatorForAdvanced === "*" || display.textContent === '0') {
        display.textContent = buttonContent;
      }else if(operatorForAdvanced === "+" || display.textContent === '0') {
        display.textContent = buttonContent;
      }else if(operatorForAdvanced === "-" || display.textContent === '0') {
        display.textContent = buttonContent;
      }else if(operatorForAdvanced === "/" || display.textContent === '0') {
        display.textContent = buttonContent;
      }
    }
    if (action === 'decimal') {}
    if (action === 'clear') {
      display.textContent = '0'
    }
    if (action === 'calculate') {
      console.log(firstNum,operatorForAdvanced,display.textContent)
      display.textContent = calculate(firstNum,operatorForAdvanced,display.textContent.slice(1));
      previousKey='calculate';
    }
  }

});
