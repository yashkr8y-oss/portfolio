const buttons = document.querySelectorAll(".delayed-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = btn.dataset.url;
        }, 3000);
    });
});
