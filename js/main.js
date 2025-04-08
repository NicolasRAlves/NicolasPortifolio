let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('.section');
let navLinks = document.querySelector('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function copyEmail(el = null) {
    const email = "dev.nicolasalves@gmail.com";
    const button = el || document.querySelector('.copy-email-btn');

    navigator.clipboard.writeText(email)
        .then(() => {
            if (button) button.classList.add('copied');
            showToast('E-mail copiado!', 'success');
        })
        .catch(() => {
            showToast('Não foi possível copiar o e-mail. Tente novamente.', 'error');
        });
}


function dowloadToast() {
    showToast('Download realizado', 'success');
}

function showToast(message, type = "success") {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon;
    switch (type) {
        case "success":
            icon = "<i class='bx bx-check-circle'></i>";
            break;
        case "error":
            icon = "<i class='bx bx-x-circle'></i>";
            break;
        case "warning":
            icon = "<i class='bx bx-error'></i>";
            break;
        default:
            icon = "<i class='bx bx-info-circle'></i>";
    }

    toast.innerHTML = `${icon} ${message}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}


document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    function getSlidesPerView() {
        if (window.innerWidth < 768) return 1;     // Mobile: 1 item por vez
        if (window.innerWidth < 1024) return 2;
        if (window.innerWidth < 1450) return 2.5;
        return 4;                                   // Desktop: 4 itens
    }


    const swiper1 = new Swiper('.swiper-container:not(.inverted)', {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 8000,
        slidesPerView: getSlidesPerView(),
        spaceBetween: 10,
        freeMode: true,
        grabCursor: true,
    });

    const swiper2 = new Swiper('.swiper-container.inverted', {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        speed: 8000,
        slidesPerView: getSlidesPerView(),
        spaceBetween: 10,
        freeMode: true,
        grabCursor: true,
    });

    window.addEventListener('resize', () => {
        const newSlidesPerView = getSlidesPerView();
        swiper1.params.slidesPerView = newSlidesPerView;
        swiper2.params.slidesPerView = newSlidesPerView;
        swiper1.update();
        swiper2.update();
    });
});



ScrollReveal().reveal('.experience-item', {
    delay: 200,
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (email !== '' && message !== '') {
            successMessage.style.display = 'block';

            setTimeout(() => {
                form.reset();
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('Por favor, preencha todos os campos antes de enviar.');
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    function checkVisible() {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", checkVisible);
    checkVisible(); // ativar se já estiver visível
  });
  