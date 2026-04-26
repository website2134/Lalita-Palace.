// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    } else {
        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");
    }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Swiper Slider
var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Chatbot Toggle
const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");

chatToggle.addEventListener("click", () => {
    chatbot.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});

// Chatbot Messages
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

function sendMessage() {
    let userText = chatInput.value.trim();
    if (userText === "") return;

    let userMsg = document.createElement("p");
    userMsg.className = "user-msg";
    userMsg.innerText = userText;
    chatBody.appendChild(userMsg);

    let botReply = document.createElement("p");
    botReply.className = "bot-msg";

    let text = userText.toLowerCase();

    if (text.includes("room")) {
        botReply.innerText = "We have Deluxe Room, Royal Suite and Family Room 🏨";
    }
    else if (text.includes("price")) {
        botReply.innerText = "Room prices start from ₹1500/night 💰";
    }
    else if (text.includes("contact") || text.includes("number")) {
        botReply.innerText = "Call us at 📞 07947128442";
    }
    else if (text.includes("location") || text.includes("address")) {
        botReply.innerText = "Near BMP-2, Dehri-Tilouthu Road, Bastipur, Dehri, Bihar 📍";
    }
    else if (text.includes("food") || text.includes("restaurant")) {
        botReply.innerText = "We provide delicious Pure Veg food 🍽️";
    }
    else if (text.includes("parking")) {
        botReply.innerText = "Yes, spacious parking is available 🚗";
    }
    else if (text.includes("wedding")) {
        botReply.innerText = "We provide premium wedding hall packages 💍";
    }
    else if (text.includes("hello") || text.includes("hi")) {
        botReply.innerText = "Hello 👋 Welcome to Lalita Palace!";
    }
    else {
        botReply.innerText = "Please call us at 07947128442 for more details 😊";
    }

    setTimeout(() => {
        chatBody.appendChild(botReply);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 700);

    chatInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Language Change
const langBtn = document.getElementById("langBtn");
let hindi = false;

langBtn.addEventListener("click", () => {
    hindi = !hindi;

    if (hindi) {
        document.querySelector(".hero-content h1").innerText = "लक्ज़री स्टे और ग्रैंड सेलिब्रेशन";
        document.querySelector(".hero-content p").innerText = "शाही आतिथ्य का अनुभव करें";
        langBtn.innerText = "English";
    } else {
        document.querySelector(".hero-content h1").innerText = "Luxury Stay & Grand Celebration";
        document.querySelector(".hero-content p").innerText = "Experience Royal Hospitality";
        langBtn.innerText = "हिंदी";
    }
});

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show");
        }
    });
});

// Sticky Navbar Background
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50
        ? "rgba(0,0,0,0.85)"
        : "rgba(0,0,0,0.55)";
});