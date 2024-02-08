const questions = [
    { question: "What did Disco Demolition Night come to symbolize? ", answer: "Divide between disco and rock" },
    { question: "Despite the diversity of disco, what group did scholarly narratives tend to universalize to disco?", answer: "the White gay experiences" },
    { question: "What did Echols note about disco?", answer: "disco evolved social movements" }
    { question: "Why were rent parties important for Black queer individuals?", answer: "it provided safety of privacy" }
    { question: "What rapper mentioned made a song on a house inspired beat?", answer: "Queen Latifah" }
    { question: "What rapper made fun of Young Thug for wearing a dress?", answer: "Nicki Minaj" }
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
  