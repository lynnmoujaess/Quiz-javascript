function goToNextQuestion(currentUrl) {
    // Extract the current question number from the URL
    const currentQuestionNumber = parseInt(currentUrl.match(/question(\d+)\.html/)[1]);
    const userAnswer = document.querySelector('input[name="answer"]:checked').value;
    localStorage.setItem(`user_answer_${currentQuestionNumber}`, userAnswer);
    const nextQuestion = `question${currentQuestionNumber + 1}.html`;
    window.location.href = nextQuestion;
}
  
function goToPreviousQuestion(currentUrl) {
    // Extract the current question number from the URL
    const currentQuestionNumber = parseInt(currentUrl.match(/question(\d+)\.html/)[1]);

    // Retrieve the user's answer for the current question from local storage
    const userAnswer = localStorage.getItem(`user_answer_${currentQuestionNumber}`);

    // Set the checked state of the corresponding radio button
    if (userAnswer) {
        const radioBtn = document.querySelector(`input[value="${userAnswer}"]`);
        if (radioBtn) {
            radioBtn.checked = true;
        }
    }

    // Construct the URL for the previous question
    const prevQuestionUrl = `question${currentQuestionNumber - 1}.html`;

    // Navigate to the previous question page
    window.location.href = prevQuestionUrl;
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`Key: ${key}, Value: ${value}`);
}
