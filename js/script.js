// Metalúrgica Orsatti - JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }


    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener datos del formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validar campos requeridos
            if (!data.nombre || !data.apellido || !data.email || !data.telefono || !data.servicio || !data.mensaje) {
                showAlert('Por favor, completa todos los campos requeridos.', 'warning');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showAlert('Por favor, ingresa un email válido.', 'warning');
                return;
            }

            // Simular envío del formulario
            showAlert('Enviando solicitud...', 'info');

            // Simular respuesta del servidor
            setTimeout(() => {
                showAlert('¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .team-card, .certification-card, .service-detail-card, .contact-info-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Validación en tiempo real para formularios
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });

    // Función para validar campos
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        // Validaciones específicas por tipo de campo
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                message = 'Por favor, ingresa un email válido.';
                break;
            case 'tel':
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                isValid = phoneRegex.test(value);
                message = 'Por favor, ingresa un teléfono válido.';
                break;
            default:
                if (field.hasAttribute('required') && !value) {
                    isValid = false;
                    message = 'Este campo es requerido.';
                }
        }

        // Aplicar estilos de validación
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');

            // Mostrar mensaje de error
            let feedback = field.parentNode.querySelector('.invalid-feedback');
            if (!feedback) {
                feedback = document.createElement('div');
                feedback.className = 'invalid-feedback';
                field.parentNode.appendChild(feedback);
            }
            feedback.textContent = message;
        }

        return isValid;
    }

    // Hover effects para cards
    const cards = document.querySelectorAll('.service-card, .feature-item, .team-card, .certification-card, .service-detail-card, .contact-info-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    }); 
});


  

