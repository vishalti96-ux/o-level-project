const quizDB = [
    {
        question: "Q1:What is the default file extension for spreadsheet in LibreOffice calc?",
        a: ".odp",
        b: ".ods ",
        c: ".odd ",
        d: ".odt ",
        ans: "ans2"
    },
    {
        question: "Q2:In LibreOffice Calc, a formula always starts with a symbol?",
        a: "%",
        b: "$",
        c: "=",
        d: "^",
        ans: "ans3"
    },
    {
        question: "Q3:How many types of cell references are there in LibreOffice Calc?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans2"
    },
    {
        question: "Q4:In which menu is option of find and replace in libreoffice ?",
        a: "File",
        b: "Edit",
        c: "View",
        d: "Sheet",
        ans: "ans2"
    },
    {
        question: "Q5:How many rows and columns are maximum in libreoffice calc ?",
        a: "1048576 or 1024   ",
        b: "1048576 or 16384",
        c: "1048570 or 1024   ",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q6:What is the maximum number of worksheets a libreoffice calc can have ?",
        a: "10",
        b: "100",
        c: "1000",
        d: "10000",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore= document.querySelector('#showscore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText=(questionList.question);
    option1.innerText=(questionList.a);
    option2.innerText=(questionList.b);
    option3.innerText=(questionList.c);
    option4.innerText=(questionList.d);
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked= false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
        questionCount++;
        deselectAll();
    if(questionCount< quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} </h3> 
        <button class= "btn" onclick = "location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreA');
    }
})