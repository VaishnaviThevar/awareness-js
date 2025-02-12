document.addEventListener("DOMContentLoaded", function () {
    let learnMoreBtn = document.getElementById("learnMore");
    let preventionSection = document.getElementById("prevention");

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            preventionSection.classList.toggle("hidden");
        });
    }
});

    