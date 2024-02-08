const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the color of the sky?", answer: "Blue" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" }
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const gameContainer = document.getElementById('gameContainer');
    const congratsContainer = document.getElementById('congratsContainer');
  
    if (currentQuestionIndex < questions.length) {
      gameContainer.style.display = 'block';
      congratsContainer.style.display = 'none';
  
      const questionDiv = document.getElementById('question');
      const answersDiv = document.getElementById('answers');
      questionDiv.textContent = questions[currentQuestionIndex].question;
      answersDiv.innerHTML = `
        <input type="text" id="userAnswer" placeholder="Type your answer">
        <button onclick="checkAnswer()">Submit</button>
      `;
    } else {
      gameContainer.style.display = 'none';
      congratsContainer.style.display = 'block';
    }
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      alert('Incorrect answer. Try again!');
    }
  }
  
  function restartGame() {
    currentQuestionIndex = 0;
    displayQuestion();
  }
  