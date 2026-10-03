console.log("MAIN JS LOADED");

/*=========================================
STICKY NAVBAR
=========================================*/

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
    }

});


/*=========================================
BACK TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/*=========================================
COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = +counter.dataset.target;

            let current = 0;
            const increment = target / 40;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}


/*=========================================
BEFORE / AFTER SLIDER
=========================================*/

const comparison = document.getElementById("comparisonImage");

if (comparison) {

    const beforeWrapper = comparison.querySelector(".before-wrapper");
    const slider = comparison.querySelector(".comparison-slider");

    let active = false;

    function setPosition(clientX) {

        const rect = comparison.getBoundingClientRect();

        let x = clientX - rect.left;

        x = Math.max(0, Math.min(x, rect.width));

        const percent = (x / rect.width) * 100;

        beforeWrapper.style.width = percent + "%";
        slider.style.left = percent + "%";

    }

    comparison.addEventListener("pointerdown", (e) => {

        active = true;

        comparison.setPointerCapture(e.pointerId);

        setPosition(e.clientX);

    });

    comparison.addEventListener("pointermove", (e) => {

        if (!active) return;

        setPosition(e.clientX);

    });

    comparison.addEventListener("pointerup", () => {

        active = false;

    });

    comparison.addEventListener("pointerleave", () => {

        active = false;

    });

    comparison.addEventListener("click", (e) => {

        setPosition(e.clientX);

    });

}

/*==================================
FAQ
==================================*/

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", function () {

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

});
/*==================================
        FAQ ACCORDION
==================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        if(item.classList.contains("active")){

            item.classList.remove("active");

            return;

        }

        faqItems.forEach(faq => faq.classList.remove("active"));

        item.classList.add("active");

    });

});
/*==================================
        PROCESS TIMELINE
==================================*/

const processCards = document.querySelectorAll(".process-card");

processCards.forEach(card => {

    const step = card.dataset.step;

    const timeline = document.querySelector(
        `.timeline-step[data-step="${step}"]`
    );

    card.addEventListener("mouseenter", () => {

        timeline.classList.add("hover");

    });

    card.addEventListener("mouseleave", () => {

        timeline.classList.remove("hover");

    });

});
/*==================================
        CONTACT FORM
==================================*/
console.log("Contact form loaded");

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const buttonText = document.getElementById("buttonText");
        const buttonLoader = document.getElementById("buttonLoader");
        const buttonIcon = document.getElementById("buttonIcon");
        const submitBtn = document.getElementById("submitBtn");
        const messageBox = document.getElementById("formMessage");

        submitBtn.disabled = true;
        buttonText.textContent = "Sending...";
        buttonLoader.classList.remove("d-none");
        buttonIcon.classList.add("d-none");

        messageBox.className = "form-message";
        messageBox.innerHTML = "";

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            service: document.getElementById("service").value,
            budget: document.getElementById("budget").value,
            timeline: document.getElementById("timeline").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxuje8YW0YAv6oy8A6CMb_KkJ6CGjMSozn_x40ytZIJ-rAt_08zUuePhkGomADOl7l4/exec",
    {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
    }
);

const result = await response.json();

            if (result.success) {

                messageBox.classList.add("success");
                messageBox.innerHTML = "✅ Thank you! Your message has been sent successfully.";

                buttonText.textContent = "Message Sent!";

                form.reset();

            } else {

                throw new Error("Submission failed");

            }

        } catch (error) {

            messageBox.classList.add("error");
            messageBox.innerHTML = "❌ Something went wrong. Please try again.";

        }

        setTimeout(() => {

            buttonText.textContent = "Send Message";

            buttonLoader.classList.add("d-none");

            buttonIcon.classList.remove("d-none");

            submitBtn.disabled = false;

        }, 1500);

    });

});
/*=========================================
COPYRIGHT YEAR
=========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*==================================
        CONTACT FORM
===================================*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;


    form.addEventListener("submit", async (e) => {

        e.preventDefault();


        /*==================================
                ELEMENTS
        ===================================*/

        const buttonText =
            document.getElementById("buttonText");

        const buttonLoader =
            document.getElementById("buttonLoader");

        const buttonIcon =
            document.getElementById("buttonIcon");

        const submitBtn =
            document.getElementById("submitBtn");

        const messageBox =
            document.getElementById("formMessage");


        /*==================================
                LOADING STATE
        ===================================*/

        submitBtn.disabled = true;

        buttonText.textContent = "Sending...";

        buttonLoader.classList.remove("d-none");

        buttonIcon.classList.add("d-none");

        messageBox.className = "form-message";

        messageBox.textContent = "";


        /*==================================
                FORM DATA
        ===================================*/

        const data = {

            name:
                document.getElementById("name").value.trim(),

            email:
                document.getElementById("email").value.trim(),

            service:
                document.getElementById("service").value,

            budget:
                document.getElementById("budget").value,

            timeline:
                document.getElementById("timeline").value,

            message:
                document.getElementById("message").value.trim()

        };


        /*==================================
                SEND TO GOOGLE SHEETS
        ===================================*/

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxuje8YW0YAv6oy8A6CMb_KkJ6CGjMSozn_x40ytZIJ-rAt_08zUuePhkGomADOl7l4/exec",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );


            const result = await response.json();


            /*==================================
                    SUCCESS
            ===================================*/

            if (result.success) {

                messageBox.classList.add("success");

                messageBox.textContent =
                    "Thank you! Your message has been sent successfully.";

                buttonText.textContent =
                    "Message Sent!";

                form.reset();


            } else {

                throw new Error(
                    "Submission failed"
                );

            }


        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            messageBox.classList.add("error");

            messageBox.textContent =
                "Something went wrong. Please try again.";

        }


        /*==================================
                RESET BUTTON
        ===================================*/

        setTimeout(() => {

            buttonText.textContent =
                "Send Message";

            buttonLoader.classList.add(
                "d-none"
            );

            buttonIcon.classList.remove(
                "d-none"
            );

            submitBtn.disabled = false;

        }, 1500);

    });

});
/*==================================
        SCROLL TO TOP
===================================*/

document.addEventListener("DOMContentLoaded", () => {

    const scrollTopBtn =
        document.getElementById("scrollTopBtn");

    if (!scrollTopBtn) return;


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });


    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
/*==================================
        COPYRIGHT YEAR
===================================*/

document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("year");

    if (!year) return;

    year.textContent = new Date().getFullYear();

});
/* ==================================
        FACELESS FAQ
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(
        "#faq .faq-item"
    );

    if (!faqItems.length) return;

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");


            /* Close all other FAQ items */

            faqItems.forEach((otherItem) => {

                otherItem.classList.remove("active");

            });


            /* Open clicked item */

            if (!isActive) {

                item.classList.add("active");

            }

        });

    });

});
/* ==================================
        CUSTOM FAQ ACCORDION
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) return;

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            /* Close every FAQ */
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
            });

            /* Open clicked FAQ */
            if (!isOpen) {
                item.classList.add("active");
            }

        });

    });

});