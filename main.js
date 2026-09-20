// =====================================
// ANO AUTOMÁTICO
// =====================================

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();


// =====================================
// ANIMAÇÃO DOS CARDS
// =====================================

const cards = document.querySelectorAll(".card");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(card);

});


// =====================================
// MENU
// =====================================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        links.forEach((item) => {
            item.classList.remove("ativo");
        });

        link.classList.add("ativo");

    });

});
