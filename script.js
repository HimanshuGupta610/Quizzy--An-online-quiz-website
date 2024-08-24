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
    question: 'Which tag is used to create a link?',
    answers: [
      { text: '<a> tag', correct: true },
      { text: '<p> tag', correct: false },
      { text: 'href', correct: false },
      { text: 'reference', correct: false }
    ]
  },
  {
    question: 'Who is the richest person?',
    answers: [
      { text: 'Mukesh Ambani', correct: false },
      { text: 'Jeff Bezos', correct: false },
      { text: 'Elon Musk', correct: true },
      { text: 'Mark Zuckerberg', correct: false }
    ]
  },
  {
    question: 'Who is the cutest person in this world?',
    answers: [
      { text: 'Crush', correct: false },
      { text: 'You', correct: true },
      { text: 'Girlfriend', correct: false },
      { text: 'Friend', correct: false }
    ]
  },
  {
    question: 'Which tag is used to show an image on the webpage?',
    answers: [
      { text: '<pic> tag', correct: false },
      { text: '<jpg> tag', correct: false },
      { text: '<photo> tag', correct: false },
      { text: '<img> tag', correct: true }
    ]
  },
  {
    question: 'What tag is used to take data from the user?',
    answers: [
      { text: '<enter> tag', correct: false },
      { text: '<cin> tag', correct: false },
      { text: '<input> tag', correct: true },
      { text: '<get> tag', correct: false }
    ]
  },
  {
    question: 'Which of the following attribute is used for merging two or more adjacent columns?',
    answers: [
      { text: 'ROWSPAN', correct: false },
      { text: 'CELL SPACING', correct: false },
      { text: 'COLSPAN', correct: true },
      { text: 'CELLPADDING', correct: false }
    ]
  },
  {
    question: 'Which of the following is used to transmit information on the world wide web?',
    answers: [
      { text: 'HPPT', correct: false },
      { text: 'HTTP', correct: true },
      { text: 'HTTTP', correct: false },
      { text: 'HTPP', correct: false }
    ]
  },
  {
    question: 'What are the attributes used to change the size of an image?',
    answers: [
      { text: 'Big and Small', correct: false },
      { text: 'Width and Height', correct: true },
      { text: 'Top and Bottom', correct: false },
      { text: 'None', correct: false }
    ]
  },
  {
    question: 'What is the function of the HTML style attribute?',
    answers: [
      { text: 'It is used to add styles to an HTML element', correct: true },
      { text: 'It is used to uniquely identify some specific stylesof some elements', correct: false },
      { text: 'Both (a) and (b)', correct: false },
      { text: 'None', correct: false }
    ]
  },
  {
    question: 'Which attribute is used to provide a unique name to an HTML element?',
    answers: [
      { text: 'name', correct: false },
      { text: 'class', correct: false },
      { text: 'type', correct: false },
      { text: 'id', correct: true }
    ]
  },
  {
    question: 'Which of the following properties is used to change the font of text?',
    answers: [
      { text: 'font-family', correct: true },
      { text: 'font-weight', correct: false },
      { text: 'font-size', correct: false },
      { text: 'text-align', correct: false }
    ]
  },
  {
    question: 'Identify the tag used to give paragraph.',
    answers: [
      { text: '<marquee>', correct: false },
      { text: '<br>', correct: false },
      { text: '<p>', correct: true },
      { text: '<pre>', correct: false }
    ]
  },
  {
    question: 'Identify the function in JavaScript which is used to send messages to users requesting for text input?',
    answers: [
      { text: 'alert()', correct: false },
      { text: 'display()', correct: false },
      { text: 'prompt()', correct: true },
      { text: 'getInput()', correct: false }
    ]
  },
  {
    question: 'Identify the container among the following.',
    answers: [
      { text: '<body>', correct: false },
      { text: '<select>', correct: false },
      { text: '<input>', correct: false },
      { text: 'both (a) and (b)', correct: true }
    ]
  }
]