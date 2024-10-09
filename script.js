document.getElementById("click-me-btn").addEventListener("click", function () {
    // Transition to the skill testing page first
    showSkillPage();

    // Use setTimeout to delay the name prompts, giving time for the page to fully load
    setTimeout(promptForName, 200); // Delay slightly to allow the UI to render
});

function promptForName() {
    let correctFirstName = "Hailleigh"; // Placeholder for the correct first name
    let correctLastName = "Evans";   // Placeholder for the correct last name

    // Name prompt loop
    while (true) {
        let firstName = prompt("Enter your first name:");
        let lastName = prompt("Enter your last name:");

        if (firstName === correctFirstName && lastName === correctLastName) {
            // Name is correct, proceed to skill-testing question
            alert("Hi Hailleigh!");
            showSkillTestingQuestion();
            break;
        } else {
            alert("Name incorrect. Please try again.");
        }
    }
}

function showSkillPage() {
    // Hide the main page and show the skill page
    document.getElementById("main-page").style.display = "none"; // Hide the main page
    document.getElementById("skill-page").style.display = "block"; // Show the skill-testing page
}

function showSkillTestingQuestion() {
    // Dynamically add image to skill page
    let skillImg = document.createElement("img");
    skillImg.src = "crow.jpg"; // Placeholder for your image
    skillImg.alt = "Skill Testing Image";
    skillImg.id = "skill-img"; // Optional, for CSS styling
    document.getElementById("skill-page").appendChild(skillImg);

    setTimeout(function () {
        // Skill testing question
        let skillAnswer = prompt('Skill testing question: Complete the sentence, "Just ____ _____."');

        // Check if the skill-testing question answer is correct
        if (skillAnswer === "crow things") { // Placeholder for the correct answer
            showHeartsPage(); // Proceed to the hearts page
        } else {
            alert("Incorrect answer. Please try again.");
            showSkillTestingQuestion();
        }
    }, 200); // Small delay to let the image load
}

function showHeartsPage() {
    // Hide the skill page and show the hearts page
    document.getElementById("skill-page").style.display = "none"; // Hide the skill-testing page
    document.getElementById("hearts-page").style.display = "block"; // Show the hearts page

    // Generate heart images
    let heartsContainer = document.getElementById("hearts-page");
    for (let i = 0; i < 20; i++) { // Change the number of hearts if desired
        let heartImg = document.createElement("img");
        heartImg.src = "heart.png"; // Placeholder for heart image
        heartImg.alt = "Heart";
        heartsContainer.appendChild(heartImg);
    }
}


