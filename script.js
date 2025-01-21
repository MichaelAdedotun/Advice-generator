const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const btn = document.getElementById('btn');


function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then( response => {
        return response.json();

    }).then( adviceData => {
        const adviceNum = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        adviceId.innerText = adviceNum;
        adviceText.innerHTML = advice;

    }).catch(error => {
        console.log(error);
    })
}

window.onload = () => {
    getAdvice();
}

btn.addEventListener("click", function (){
    getAdvice();
})
