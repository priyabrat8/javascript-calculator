let ans = new Number(); 
const num1 = document.getElementById('num-one');
const num2 = document.getElementById('num-two');
const answer = document.getElementById('answer');
const Yourchoise = document.getElementById('symbole');

const calculate = () => {
    const Yourchoisevalue = Yourchoise.value;
    const num1Value = + num1.value;
    const num2Value = + num2.value;

    if(Yourchoisevalue == '+'){
        ans = num1Value + num2Value
    }

    if(Yourchoisevalue == '-'){
        ans = num1Value - num2Value
    }
    
    if(Yourchoisevalue == '*'){
        ans = num1Value * num2Value
    }
    
    if(Yourchoisevalue == '/'){
        ans = num1Value / num2Value
    }

    answer.innerHTML = ans
}