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

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function copyEmail() {
    const email = "dev.nicolasalves@gmail.com";
    const button = document.querySelector('.copy-email-btn');

    navigator.clipboard.writeText(email)
        .then(() => {
            // Feedback visual
            button.classList.add('copied');
            button.innerHTML = `<span>E-mail copiado!</span> <i class='bx bx-check'></i>`;
            showToast('E-mail copiado!', 'success');
            setTimeout(() => {
                // Volta ao normal após 2 segundos
                button.classList.remove('copied');
                button.innerHTML = `<p>${email}</p> <i class='bx bx-copy'></i>`;
            }, 2000);
        })
        .catch(() => {
            showToast('Não foi possível copiar o e-mail. Tente novamente.', 'error');
        });
}

function dowloadToast(){
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