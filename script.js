const button = document.querySelector('.cta-btn');

button.addEventListener('mouseenter', () => {
    button.style.transform = "scale(1.05)";
});

button.addEventListener('mouseleave', () => {
    button.style.transform = "scale(1)";
});
const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
    button.style.opacity = "0.6";
});

button.addEventListener("mouseleave", () => {
    button.style.opacity = "1";
});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
document.getElementById("workBtn").addEventListener("click", function() {
    alert("Thank you for your interest! Let's connect.");
});
const button = document.querySelector(".hero-btn");

button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

    const btn = document.querySelector('.cta-btn');

    btn.addEventListener('click', () => {
        alert("Contact section coming soon 😌✨");
    });


    const links = document.querySelectorAll('.find a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            alert("Navigation coming soon 😌");
        });
    });

    const legalLinks = document.querySelectorAll('.legal-links a');

    legalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Legal page coming soon 🙂");
        });
    });
    const button = document.querySelector("button");
    const input = document.querySelector("input");

    button.addEventListener("click", () => {
        if (input.value === "") {
            alert("Please enter your email 🙂");
        } else {
            alert("Thank you for subscribing! 🎉");
            input.value = "";
        }
    });


