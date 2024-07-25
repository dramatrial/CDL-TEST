const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
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
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'In the image, what is A?',
        answers: [
            { text: 'Steering Arms', correct: true },
            { text: 'Tie Rod', correct: false },
            { text: 'Torque Rod', correct: false },
            { text: 'Hanger', correct: false },
        ]
    },
    {
        question: 'In the image, what is B?',
        answers: [
            { text: 'Steering Wheel Shaft', correct: false },
            { text: 'Steering Gear Box', correct: false },
            { text: 'Steering Wheel', correct: true },
            { text: 'Vehicle Frame', correct: false },
        ]
    },
    {
        question: 'In the image, what is C?',
        answers: [
            { text: 'Hanger', correct: false },
            { text: 'Tie Rod', correct: true },
            { text: 'Spring Shackle', correct: false },
            { text: 'Drag Link', correct: false },
        ]
    }, {
        question: 'In the image, what is D?',
        answers: [
            { text: 'Torque Rod', correct: false },
            { text: 'Steering Wheel', correct: false },
            { text: 'Leaf Spring', correct: false },
            { text: 'Spindle', correct: true },
        ]
    }, {
        question: 'In the image, what is E?',
        answers: [
            { text: 'Front Axle', correct: false },
            { text: 'Main Spring', correct: false },
            { text: 'Steering Gear Box', correct: false },
            { text: 'Steering Ring Knuckle', correct: true },
        ]
    }, {
        question: 'In the image, what is F?',
        answers: [
            { text: 'Drag Link', correct: true },
            { text: 'Steering Wheel Shaft', correct: false },
            { text: 'Pitman Arm', correct: false },
            { text: 'Hanger', correct: false },
        ]
    },
    {
        question: 'In the image, what is G?',
        answers: [
            { text: 'Hanger', correct: false },
            { text: 'Pitman Arm', correct: true },
            { text: 'Frame', correct: false },
            { text: 'Hydraulic Shock Absorber', correct: false },
        ]
    },
    {
        question: 'In the image, what is H?',
        answers: [
            { text: 'Steering Gear Box', correct: true },
            { text: 'Spindle', correct: false },
            { text: 'Steering Arms', correct: false },
            { text: 'Vehicle Frame', correct: false },
        ]
    },
    {
        question: 'In the image, what is I?',
        answers: [
            { text: 'Hanger', correct: false },
            { text: 'Steering Ring Knuckle', correct: false },
            { text: 'Bearing Plates', correct: false },
            { text: 'Hydraulic Shock Absorber', correct: true },
        ]
    },
    {
        question: 'In the image, what is J?',
        answers: [
            { text: 'Vehicle Frame', correct: true },
            { text: 'Spring Shackle', correct: false },
            { text: 'Leaf Spring', correct: false },
            { text: 'Steering Wheel', correct: false },
        ]
    },
    {
        question: 'In the image, what is K?',
        answers: [
            { text: 'Front Axle', correct: true },
            { text: 'Steering Arms', correct: false },
            { text: 'Axle', correct: false },
            { text: 'Main Spring', correct: false },
        ]
    },
    {
        question: 'In the image, what is L?',
        answers: [
            { text: 'Vehicle Frame', correct: false },
            { text: 'Main Spring', correct: false },
            { text: 'Frame', correct: false },
            { text: 'Leaf Spring', correct: true },
        ]
    },
    {
        question: 'In the image, what is M?',
        answers: [
            { text: 'Spindle', correct: false },
            { text: 'Frame', correct: true },
            { text: 'Vehicle Frame', correct: false },
            { text: 'Hydraulic Shock Absorber', correct: false },
        ]
    },
    {
        question: 'In the image, what is N?',
        answers: [
            { text: 'Bearing Plate', correct: true },
            { text: 'Front Axle', correct: false },
            { text: 'Tie Rod', correct: false },
            { text: 'Steering Wheel Shaft', correct: false },
        ]
    },
    {
        question: 'In the image, what is O?',
        answers: [
            { text: 'Steering Wheel', correct: false },
            { text: 'Pitman Arm', correct: false },
            { text: 'Drag Link', correct: false },
            { text: 'Bearing Plate', correct: true },
        ]
    },
    {
        question: 'In the image, what is P?',
        answers: [
            { text: 'Spindle', correct: false },
            { text: 'Hanger', correct: true },
            { text: 'Axle', correct: false },
            { text: 'Main Spring', correct: false },
        ]
    },
    {
        question: 'In the image, what is Q?',
        answers: [
            { text: 'Front Axle', correct: false },
            { text: 'Spring Shackle', correct: true },
            { text: 'Axle', correct: false },
            { text: 'Main Spring', correct: false },
        ]
    },
    {
        question: 'In the image, what is R?',
        answers: [
            { text: 'Front Axle', correct: false },
            { text: 'Main Spring', correct: true },
            { text: 'Steering Arms', correct: false },
            { text: 'Spindle', correct: false },

        ]
    },
    {
        question: 'In the image, what is S?',
        answers: [
            { text: 'Spindle', correct: false },
            { text: 'Frame', correct: false },
            { text: 'Axle', correct: true },
            { text: 'Hydraulic Shock Absorber', correct: false },
        ]
    },
    {
        question: 'In the image, what is T?',
        answers: [
            { text: 'Vehicle Frame', correct: false },
            { text: 'Hydraulic Shock Absorber', correct: false },
            { text: 'Spindle', correct: false },
            { text: 'Torque Rod', correct: true },
        ]
    },
    {
        question: 'In the image, what is U?',
        answers: [
            { text: 'Spring Shackle', correct: false },
            { text: 'Leaf Spring', correct: true },
            { text: 'Spindle', correct: false },
            { text: 'Steering Wheel', correct: false },
        ]
    },
]