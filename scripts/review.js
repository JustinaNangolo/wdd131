document.addEventListener("DOMContentLoaded", () => {
    // Get the current count from local storage, default to 0
    let reviewCount = Number(window.localStorage.getItem("review-count")) || 0;

    // Increment the count
    reviewCount++;

    // Save it back to local storage
    window.localStorage.setItem("review-count", reviewCount);

    // Display it on the page
    document.getElementById("submissionCount").textContent = reviewCount;
});