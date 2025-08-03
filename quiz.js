// Define the function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    var correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option was selected
    if (selectedOption) {
        var userAnswer = selectedOption.value;

        // Step 4: Compare answers and display feedback
        var feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
    }
}

// Step 5: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
