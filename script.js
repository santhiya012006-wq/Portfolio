/* =========================================================
   SANthiya B - PORTFOLIO WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (navLinks.classList.contains("active")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Close mobile menu after clicking navigation link */

        const navLinksItems =
            document.querySelectorAll(".nav-link");

        navLinksItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                const icon =
                    menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });

    }


    /* =====================================================
       TYPING EFFECT
       ===================================================== */

    const typingText =
        document.querySelector(".typing-text");

    if (typingText) {

        const words = [
            "Web Developer",
            "Frontend Developer",
            "Python Developer",
            "Problem Solver"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentWord =
                words[wordIndex];


            /* Typing */

            if (!deleting) {

                typingText.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                /* Finished typing */

                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1500
                    );

                    return;
                }

            }


            /* Deleting */

            else {

                typingText.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                /* Finished deleting */

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;


                    if (
                        wordIndex >=
                        words.length
                    ) {

                        wordIndex = 0;

                    }

                }

            }


            const speed =
                deleting ? 60 : 100;

            setTimeout(
                typeEffect,
                speed
            );

        }


        typeEffect();

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section");

    const navigationItems =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionBottom =
                section.offsetTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationItems.forEach(function (link) {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");


            if (
                target ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    if (
        sections.length > 0 &&
        navigationItems.length > 0
    ) {

        window.addEventListener(
            "scroll",
            updateActiveNavigation
        );

        updateActiveNavigation();

    }


    /* =====================================================
       BACK TO TOP BUTTON
       ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        /* Show / hide button */

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        /* Scroll to top */

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(

            ".skill-card, " +
            ".project-card, " +
            ".about-card, " +
            ".about-content, " +
            ".contact-info, " +
            ".contact-form, " +
            ".resume-container, " +
            ".experience-card"

        );


    /* Add reveal class */

    revealElements.forEach(
        function (element) {

            element.classList.add("reveal");

        }
    );


    /* Intersection Observer */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(

                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15
                }

            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(element);

            }
        );

    } else {

        /* Fallback for older browsers */

        revealElements.forEach(
            function (element) {

                element.classList.add("show");

            }
        );

    }


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput =
                    document.getElementById("name");


                let name = "there";


                if (nameInput) {

                    const enteredName =
                        nameInput.value.trim();


                    if (enteredName !== "") {

                        name = enteredName;

                    }

                }


                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been received."
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});