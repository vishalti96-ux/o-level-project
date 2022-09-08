const quizDB = [
    {
        question: "Q1: Which of the following comes in LPWAN Technology?",
        a: "LoRa",
        b: "GSM",
        c: "LTE",
        d: "CDMA",
        ans: "ans1"
    },
    {
        question: "Q2: Which of the following protocols is a publish-subscribe architecture?",
        a: "HTTP",
        b: "MQTT",
        c: "HTTPS",
        d: "CoAP",
        ans: "ans2"
    },
    {
        question: "Q3:API enables portability of services between ___________________ ?",
        a: "Services",
        b: "Networks",
        c: "Systems",
        d: "Devices",
        ans: "ans3"
    },
    {
        question: "Q4: Who created MQTT?",
        a: "Robert Cailliau",
        b: "Tim Berners Lee",
        c: "Andy Stanford-Clark",
        d: "Vint Cerf",
        ans: "ans3"
    },
    {
        question: "Q5: The standard ports of MQTT are __________ ?",
        a: "SSL",
        b: "I2C",
        c: "TCP/IP",
        d: "USART",
        ans: "ans3"
    },
    {
        question: "Q6: How many types of message formats are there in the HTTP protocol?",
        a: "4 types",
        b: "5 types",
        c: "3 types",
        d: "2 types",
        ans: "ans4"
    },
    {
        question: "Q7: The following databases are recommended for unstructured data for IoT applications.",
        a: "MS SQL",
        b: "POSTAGE SQL",
        c: "MONGO DB",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q8: How many types of arduinos do we have?",
        a: "6",
        b: "1",
        c: "8",
        d: "14",
        ans: "ans3"
    },
    {
        question: "Q9: Which is the first board to use Micro Controller in build USB?",
        a: "UNO",
        b: "RedBoard",
        c: "LilyPad",
        d: "Leonardo",
        ans: "ans4"
    },
    {
        question: "Q10: _____________ function configures the input/output pins?",
        a: "delay()",
        b: "pinMode()",
        c: "setup()",
        d: "loop()",
        ans: "ans2"
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