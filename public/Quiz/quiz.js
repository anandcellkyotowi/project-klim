import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDQp6q-1X1fpzaxT5zaOKVcTVoC0gYTTN4",
    authDomain: "ekoroji-01.firebaseapp.com",
    projectId: "ekoroji-01",
    storageBucket: "ekoroji-01.appspot.com",
    messagingSenderId: "544309183835",
    appId: "1:544309183835:web:0fd017b73deefb076f467e",
    measurementId: "G-0W77FD2HC8"
};
let questions = []
let cnt = 0;
let score = 0;
let clickable = true

initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db, 'questions')
getDocs(colRef)
    .then((snapshot) => {

        snapshot.docs.forEach((doc) => {
            questions.push({...doc.data(), id: doc.id })
        })
    })
    .catch(err => {
        console.log(err.message)
    })
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultElement = document.getElementById('result')
const endScore = document.querySelector('.end-score')
var CountQuestion = 0;
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    questionContainerElement.style.display = 'block';
    resultElement.innerHTML = ''
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    clickable = true
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    endScore.style.display = 'none';
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    let correct = selectedButton.dataset.correct
    if (correct && clickable) {
        score++;
        clickable = false;
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')


    } else {
        questionContainerElement.style.display = 'none';
        resultElement.innerHTML = '?????????? ???????????? ?????????????????? ?????????????????? ?????????????????? ???????? ??????????????????!'
        startButton.innerText = '???????? ????????????'
        startButton.classList.remove('hide')
        endScore.style.color = 'black';
        endScore.innerHTML = '????????: ' + score + ' / 9'
        endScore.style.display = 'flex';
        clickable = true
        score = 0

    }
    clickable = false
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        CountQuestion++;
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}