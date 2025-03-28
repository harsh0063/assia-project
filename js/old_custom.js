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

document.querySelectorAll(".main-event-sec .tabs-bar a").forEach(function(tab) {
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