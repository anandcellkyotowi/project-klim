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
    resultElement.innerHTML = ''
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    // if (CountQuestion > 4) {
    //     endGame();
    // }
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
        resultElement.innerHTML = 'Thank you for taking our quiz!'
        startButton.innerText = 'Retake'
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

// function endGame() {
//     questionContainerElement.classList.add('hide');
//     resultElement.style.display = 'flex';
// }

const questions = [{
        question: 'Дэлхийн дулаарлын гол хүчин зүйл юу вэ?',
        answers: [
            { text: 'Галт уулын идэвхжилт', correct: true },
            { text: 'Хүний үйл ажиллагаа', correct: false },
            { text: 'Олон төрлийн амьтад устах', correct: false }
        ]
    },
    {
        question: 'Who is the best YouTuber?',
        answers: [
            { text: 'Web Dev Simplified', correct: false },
            { text: 'Traversy Media', correct: false },
            { text: 'Dev Ed', correct: true },
            { text: 'Fun Fun Function', correct: false }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [
            { text: 'Kinda', correct: false },
            { text: 'YES!!!', correct: true },
            { text: 'Um no', correct: false },
            { text: 'IDK', correct: false }
        ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true }
        ]
    }
]