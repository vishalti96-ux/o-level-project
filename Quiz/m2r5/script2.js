const quizDB = [
    {
        question: "Q1:What is the extension of HTML File?",
        a: ".css",
        b: ".html",
        c: ".js",
        d: ".csv",
        ans: "ans2"
    },
    {
        question: "Q2:What is the extension of CSS File?",
        a: ".css",
        b: ".html",
        c: ".js",
        d: ".csv",
        ans: "ans1"
    },
    {
        question: "Q2:What is the extension of JavaScript File?",
        a: ".css",
        b: ".html",
        c: ".js",
        d: ".csv",
        ans: "ans3"
    },
    {
        question: "Q4: ______  is the HTML tag used for superscript text?",
        a: "<sup>",
        b: "<s>",
        c: "<superscript>",
        d: "<superscripted>",
        ans: "ans1"
    },
    {
        question: "Q5: W3.CSS does not provides the following border class?",
        a: "w3-border-bottom",
        b: "w3-border-top",
        c: "w3-border-right",
        d: "w3-border-gutter",
        ans: "ans4"
    },
    {
        question: "Q6: Who invented www (world wide web)?",
        a: "Bill Gates",
        b: "Lee. N. Feyong",
        c: "Tim Berners Lee",
        d: "Tom berners Lee",
        ans: "ans3"
    },
    {
        question: "Q7: Which of the following is used to create and ordered list in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<pl>",
        d: "<dl>",
        ans: "ans2"
    },
    {
        question: "Q8: HTML metadata is present in which of the following tags?",
        a: "<head>",
        b: "<body>",
        c: "<div>",
        d: "<dl>",
        ans: "ans1"
    },
    {
        question: "Q9: Which of the following properties of an anchor element indicates that the user is currently clicking on an element?",
        a: ":link",
        b: ":visited",
        c: ":hover",
        d: ":active",
        ans: "ans4"
    },
    {
        question: "Q10: ___________ is a declaration for an HTML5 document.",
        a: "<!Doctype html>",
        b: "<Doctype html>",
        c: "</Doctype html>",
        d: "<!Doctype html!>",
        ans: "ans1"
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