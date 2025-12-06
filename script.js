const btn = document.getElementById("darkMode");

btn.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
});

// fixed code 
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const href = this.getAttribute("href"); // fixed

        document.body.classList.add("page-transition");

        setTimeout(() => {
            window.location.href = href;
        }, 400); // css animation timeline
    });
});
const box = document.querySelectorAll(".box");
box.forEach(box => {



    box.addEventListener("mouseenter", () => {
        box.classList.add("glow");
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("glow");
    });
});
    
