const quoteNum = document.getElementById('quoteNum');
const quoteTxt = document.getElementById('quoteTxt');
const quoteBtn = document.getElementById('btn');
const dice = document.getElementById('dice');
let roll = true;

function getSomeAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        quoteNum.innerHTML = ('Advice #' + data.slip.id);
        quoteTxt.innerHTML = ('“ ' + data.slip.advice + ' ”');
        });
};

quoteBtn.addEventListener('click', getSomeAdvice);
quoteBtn.addEventListener('click', function(){
    if(roll) {
        dice.style.transform = "rotate(360deg)";
        roll = false;
    } else {
        dice.style.transform = "rotate(0deg)"
        roll = true;
    }
});