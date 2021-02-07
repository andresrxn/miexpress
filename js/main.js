function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.15}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

navSlide();
document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;



        if (scrollTop <= 50) {
            let header = document.getElementById('header');
            header.classList.remove("header-active");
        } else {
            let header = document.getElementById('header');
            header.classList.add("header-active");
        }
    });

});


const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const msg = document.querySelector('#form textarea');

const expresiones = {

    name: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,20}$/,
    msg: /^[\s\S]{10,400}$/,
}

const campos = {
    name: false,
    email: false,
    phone: false,
    msg: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "phone":
            validarCampo(expresiones.phone, e.target, 'phone');
            if (phone.value == "") {

                document.querySelector(`.input-phone .input-error`).style.display = "none"
            }
            break;
        case "msg":
            validarCampo(expresiones.msg, e.target, 'msg');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {


        // document.querySelector(`#input-${campo} i`).classList.add('fa-check-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
        campos[campo] = true;
    } else {

        // document.querySelector(`#input-${campo} i`).classList.add('fa-times-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`.input-${campo} .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (input.value == "") {

        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
    }
}
const validarText = (expresion, msg, campo) => {
    if (expresion.test(msg.value)) {


        // document.querySelector(`#input-${campo} i`).classList.add('fa-check-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`.input-msg .input-error`).style.display = "none"
        campos[campo] = true;
    } else {

        // document.querySelector(`#input-${campo} i`).classList.add('fa-times-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`.input-msg .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (msg.value == "") {

        document.querySelector(`.input-msg .input-error`).style.display = "none"
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
msg.addEventListener('keyup', validarFormulario);
msg.addEventListener('blur', validarFormulario);

form.addEventListener('keyup', () => {
    if (campos.name && campos.email && campos.phone && campos.msg || campos.name && campos.email && campos.phone == "" && campos.msg) {
        document.querySelector(`.input-submit .input-error`).style.display = "none";
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (campos.name && campos.email && campos.phone && campos.msg || campos.name && campos.email && campos.phone == "" && campos.msg) {
        document.querySelector(`.input-submit .input-error`).style.display = "none"

        form.reset();
        form.submit();


        return;
    } else {
        document.querySelector(`.input-submit .input-error`).style.display = "block"
        return;
    }

});