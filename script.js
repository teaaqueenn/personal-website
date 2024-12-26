// JavaScript for hover effects and basic interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Get all circular buttons
    const buttons = document.querySelectorAll(".circle-button");

    // Add hover effect to buttons
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";  // Increase size on hover
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";   // Return to original size
        });
    });

    // Small button (bottom right) - currently no functionality
    const smallButton = document.querySelector(".small-circle-button");
    smallButton.addEventListener("click", () => {
        // Placeholder for future functionality
        console.log("Small button clicked");  // @TODO: Add functionality
    });
});