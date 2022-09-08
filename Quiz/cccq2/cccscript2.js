const quizDB = [
    {
        question: "Q1:Which function key is used as a refresh button?",
        a: "F5",
        b: "F2",
        c: "F1",
        d: "F7",
        ans: "ans1"
    },
    {
        question: "Q2: The command to view the content of a file in LINUX is ______ .",
        a: "cd",
        b: "touch",
        c: "mkdir",
        d: "cat",
        ans: "ans4"
    },
    {
        question: "Q3:An example of an operating system is?",
        a: "Edge",
        b: "Chrome",
        c: "Ubantu",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q4: Founder of Ubuntu is ?",
        a: "Charls babage",
        b: "Mark Shuttleworth",
        c: "Sundar pichai",
        d: "Mark Zukerbarg",
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
    {
        question: "Q7:What is the maximum zoom of LibreOffice Writer?",
        a: "500%",
        b: "100%",
        c: "300%",
        d: "3000%",
        ans: "ans1"
    },
    {
        question: "Q8: The process of removing unwanted part of an image is called.",
        a: "Cutting",
        b: "Merging",
        c: "Hiding",
        d: "Cropping",
        ans: "ans4"
    },
    {
        question: "Q9: The shortcut key for print preview in LibreOffice is.",
        a: "Ctrl + F2",
        b: "Ctrl + Shift+ N",
        c: "Ctrl + Shift + O",
        d: "None of these",
        ans: "ans3"
    },
    {
        question: "Q10: Interest is paid on savings deposits by the bank.",
        a: "Yearly",
        b: "Quarterly",
        c: "Half yearly",
        d: "Every month",
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