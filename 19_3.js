
const answer = document.getElementById('out');
const firstNumber=document.getElementById("num1");
const secondNumber=document.getElementById("num2");


class Calculate {
    constructor(num1, num2) {
      this.num1 = num1; 
      this.num2 = num2; 
    }
static sum(thisNumbers){
  return thisNumbers.num1 + thisNumbers.num2;
}
static minus(thisNumbers){
  return thisNumbers.num1 - thisNumbers.num2;
}
static multiply(thisNumbers){
  return thisNumbers.num1 * thisNumbers.num2;
}
static division(thisNumbers){
  return thisNumbers.num1 / thisNumbers.num2;
}
}

function Getminus(){
  let newNumbers =new Calculate(firstNumber.value, secondNumber.value);
  answer.innerHTML = Calculate.minus(newNumbers);
}
function GetDivision(){
  let newNumbers =new Calculate(firstNumber.value, secondNumber.value);
    answer.innerHTML = Calculate.division(newNumbers);
    if (secondNumber == 0) {
      alert('На ноль делить нельзя!');
      answer.innerHTML = '';
  }
}

function Getplus(){
  let newNumbers =new Calculate(firstNumber.value, secondNumber.value);
  answer.innerHTML = Calculate.sum(newNumbers);
}
function GetMultiple(){
  let newNumbers =new Calculate(firstNumber.value, secondNumber.value);
  answer.innerHTML = Calculate.multiply(newNumbers);
}

// if (num1 == '0') {
//         document.getElementById('error')
//              .innerHTML += "не дели блин на нуль! <br>";
//     }
//     if (num2 == '0') {
//       document.getElementById('error')
//             .innerHTML += "брось эту затею <br>";
            
//     }
