function checkQuiz() {
  let score = 0;
  let feedback = [];

  const answers = {
    q1: "b",
    q2: "b",
    q3: "c",
    q4: "a"
  };

  const explanations = {
    q1: "Input devices send data into a computer.",
    q2: "Sensors detect changes in the enviroment such as heat, light, or motion.",
    q3: "A printer is an output device because it produces information from the computer.",
    q4: "Monitoring collects data, while control uses that data to react automatically."
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected && selected.value === answers[key]) {
      score++;
      feedback.push(`<p>✅ ${key.toUpperCase()}: Correct</p>`);
    } else {
      feedback.push(`<p>❌ ${key.toUpperCase()}: ${explanations[key]}</p>`);
    }
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p>Your score is ${score} out of 4</p>
    ${feedback.join("")}
  `;
}
