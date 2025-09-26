// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

document.body.appendChild(backToTopBtn);

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Funcionalidad del botón
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Button WhatsApp
const btnWpp = document.createElement('a');
btnWpp.innerHTML = `<a href="https://wa.me/+2235402839?text=Hola! Quiero cotizar un trabajo." target="_blank"
        rel="noopener noreferrer"
        title="Contactanos via WhatsApp"><i class="fab fa-whatsapp"></i></a>`;
btnWpp.classList.add('btn-wpp');
document.body.appendChild(btnWpp);
