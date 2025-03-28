document.querySelector('.user--icons .search').addEventListener('click', function () {
    document.querySelector('.search__popup').classList.add('active');
    document.querySelector('.search__popup-overly').classList.add('active');
});

document.querySelector('.close--icon').addEventListener('click', function () {
    document.querySelector('.search__popup').classList.remove('active');
    document.querySelector('.search__popup-overly').classList.remove('active');
});

document.querySelector('.search__popup-overly').addEventListener('click', function () {
    document.querySelector('.search__popup').classList.remove('active');
    document.querySelector('.search__popup-overly').classList.remove('active');
});

document.querySelectorAll(".main-event-sec .tabs-bar a, .event-tag-bar .tabs-bar a").forEach(function(tab) {
    tab.addEventListener("click", function(event) {
        event.preventDefault();

        // Active class che to remove karo, nahi to add karo
        this.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    let element = document.querySelector(".chatbot span"); // Replace with your target element

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            element.classList.add("hidden");
        } else {
            // Scrolling up
            element.classList.remove("hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".card");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Show/hide cards based on category
            cards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                }
            });
        });
    });
});









let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const stepIndicators = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const wizard = document.getElementById("wizard");
const successMessage = document.getElementById("successMessage");

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    stepIndicators.forEach((indicator, index) => {
        if (index < currentStep) {
            indicator.classList.add("completed");
            indicator.innerHTML = "✔"; // Show checkmark on completed steps
        } else {
            indicator.classList.remove("completed");
            indicator.innerHTML = index + 1; // Restore step number
        }
        indicator.classList.toggle("active", index === currentStep);
    });

    progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;

    nextBtn.textContent = currentStep === steps.length - 1 ? "Purchase" : "Add Payment details";
}

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    } else {
        wizard.style.display = "none"; // Hide wizard
        successMessage.style.display = "block"; // Show success message
    }
});

updateStep();



function togglePaymentForm() {
    const creditCardForm = document.getElementById("creditCardForm");
    const creditCardOption = document.getElementById("creditCard").checked;
    
    creditCardForm.style.display = creditCardOption ? "block" : "none";
}