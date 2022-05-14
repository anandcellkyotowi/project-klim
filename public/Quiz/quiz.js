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
initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db, 'questions')
getDocs(colRef)
    .then((snapshot) => {

        snapshot.docs.forEach((doc) => {
            questions.push({...doc.data(), id: doc.id })
        })
        console.log(questions)
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
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        questionContainerElement.style.display = 'none';
        resultElement.innerHTML = 'Манай асуулт хариултын тоглоомыг тоглосонд танд баярлалаа!'
        startButton.innerText = 'Ахин тоглох'
        startButton.classList.remove('hide')
    }
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
// const questions = [{
//         question: 'Эдгээрийн аль нь дэлхий цаг уурын өөрчлөлтөөс гарж буй үр дагавар вэ?',
//         answers: [
//             { text: 'Мөсөн уулнууд хайлж далай өмнөхөөсөө илүү хүчиллэг болж байна ', correct: false },
//             { text: 'Гадаргуйн дулаан жил тутам дээд рекорд тогтоож байна', correct: false },
//             { text: 'Олон төрлийн амьтад устах ( Ган гачиг, далайн шуурга г.м)', correct: false },
//             { text: 'Бүгд зөв', correct: true }
//         ]
//     },
//     {
//         question: 'Эдгээр улсуудын аль нь хамгын их нүүрстөрөгчийн давхар исэл гаргадаг вэ?',
//         answers: [
//             { text: 'АНУ', correct: false },
//             { text: 'Их Британи', correct: false },
//             { text: 'ОХУ', correct: false },
//             { text: 'БНХАУ', correct: true }
//         ]
//     },
//     {
//         question: 'Доорхи он жилүүдээс алинд нь халууны дээд рекорд тогтоогдсон бэ?',
//         answers: [
//             { text: '2016', correct: false },
//             { text: '2020', correct: false },
//             { text: 'Дээрхи Бүгд', correct: true },
//             { text: 'Аль нь ч биш', correct: false }
//         ]
//     },
//     {
//         question: 'Эдгээрээс аль нь дэлхийн дулаарлын гол шалтгаан нь вэ?',
//         answers: [
//             { text: 'Задарч буй ургамалууд', correct: false },
//             { text: 'Шатаж буй тос , нүүрс , бензин', correct: true },
//             { text: 'Байгаль өөрөө дулаарч байгаа', correct: false },
//             { text: 'Түймрийн улмаас үүссэн бохирдол', correct: false }
//         ]
//     },
//     {
//         question: 'Сүүлийн 100 жилд эдгээр газруудын аль нь хамгийн их дулаарсан бэ?',
//         answers: [
//             { text: 'Марракеч, Морокко', correct: false },
//             { text: 'Басра, Ирак', correct: false },
//             { text: 'Ванкоуер, Канад', correct: false },
//             { text: 'Свалбард, Норвеги', correct: true }
//         ]
//     },
//     {
//         question: 'Сүүлийн үед цаг агаарын өөрчлөлтийн нөлөө нь аль бүсүүдэд илүү ажиглагдсан бэ?',
//         answers: [
//             { text: 'Хойд өргөрөг ', correct: true },
//             { text: 'Өмнөд өргөрөг', correct: false },
//             { text: 'Халуун Орны бүс нутаг ', correct: false },
//             { text: 'Бүх газруудад ижил тархсан', correct: false }
//         ]
//     },
//     {
//         question: 'Дэлхийн дулаарал дэлхийн бүх хэсгүүдэд ижил нөлөөлдөг',
//         answers: [
//             { text: 'Үнэн', correct: false },
//             { text: 'Худал', correct: true },
//         ]
//     },
//     {
//         question: 'Цаг агаарын өөрчлөлт болон эрс тэс уур амьсгал холбоотой',
//         answers: [
//             { text: 'Үнэн', correct: true },
//             { text: 'Худал', correct: false },
//         ]
//     },
//     {
//         question: 'Сүүлчийн 100 жилд далайн түвшин хэдэн СМ өссөн бэ?',
//         answers: [
//             { text: '5', correct: false },
//             { text: '17.7', correct: true },
//             { text: '40.6', correct: false },
//             { text: '12.7', correct: false }
//         ]
//     },
// ]