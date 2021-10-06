const QuizData = [
    {
        question:"who invented javascript?",
        a:"James Gosling",
        b:"Brendan Eich",
        c:"Dustin moskovitz",
        d:"Kevin NASH",
        correct: 'b'
    },{
        question:"Which of the following is Mark up langauage?",
        a:"HTML",
        b:"Java",
        c:"Python",
        d:"Ruby",
        correct: 'a'

    },{
        question:"Who is the Co-founder of FaceBook?",
        a:"Kevin Systrom",
        b:"JAN koum",
        c:"Jack Dorsey",
        d:"Mark Zuckerberg",
        correct: 'd'
    },{
        question:"Who scored most centuries in world cup 2019?",
        a:"Rohit Sharma",
        b:"David Warner",
        c:"Kane Williamson",
        d:"ViratKohli",
        correct: 'a'
    }
];
const questionE1=document.getElementById("question");
const a_text =document.getElementById("a-text");
const b_text =document.getElementById("b-text");
const c_text =document.getElementById("c-text");
const d_text =document.getElementById("d-text");

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQUIZdata = QuizData[currentQuestion];
    questionE1.innerText= currentQUIZdata.question;
    a_text.innerText= currentQUIZdata.a
    b_text.innerText= currentQUIZdata.b
    c_text.innerText= currentQUIZdata.c
    d_text.innerText= currentQUIZdata.d


    currentQuestion++;

}