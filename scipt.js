document.addEventListener("DOMContentLoaded", function() {
    // Effet de scroll smooth pour la navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animation sur les sections au scroll
    const sections = document.querySelectorAll(".section");
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Formulaire de contact - simulation d'envoi
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const responseMessage = document.getElementById("response-message");
        responseMessage.textContent = "Merci pour votre message, je vous répondrai bientôt !";
        responseMessage.style.color = "green";
        form.reset();
    });
});
