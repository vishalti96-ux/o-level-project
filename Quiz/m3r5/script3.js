const quizDB = [
    {
        question: "Q1:Which of the following is not part of the execution flow during debugging?",
        a: "Step Up()",
        b: "Step Over",
        c: "Step Out",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q2: What is the output of int(1011)?",
        a: "11",
        b: "14",
        c: "1011",
        d: "None",
        ans: "ans3"
    },
    {
        question: "Q3: Who developed the python programming Language?",
        a: "Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: "Niene Stom",
        d: "Guido Van Rossum",
        ans: "ans4"
    },
    {
        question: "Q4:The ____________ symbol is used at the beginning of a flow chart?",
        a: "Circle",
        b: "Rectangle",
        c: "Diamond",
        d: "None of these",
        ans: "ans4"
    },
    {
        question: "Q5: __________ provides a pictorial representation of the given problem.",
        a: "Algorithm ",
        b: "FlowChart",
        c: "Pseudocode",
        d: "All of these",
        ans: "ans2"
    },
    {
        question: "Q6: which of the following is not a keyword?",
        a: "eval",
        b: "nonlocal",
        c: "pass",
        d: "assert",
        ans: "ans1"
    },
    {
        question: "Q7: which of the following are integer values?",
        a: "3.145",
        b: "41",
        c: "12.5",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q8: What is the output of print(9//2)?",
        a: "4.25",
        b: "4.5",
        c: "4",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q9: Which arithmetic operators cannot be used with strings in Python?",
        a: "+",
        b: "/",
        c: "-",
        d: "*",
        ans: "ans3"
    },
    {
        question: "Q10: Which of the following is a python tuple?",
        a: "[5]",
        b: "{1,2,3}",
        c: "(1,2,3,4)",
        d: "None of the above",
        ans: "ans3"
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