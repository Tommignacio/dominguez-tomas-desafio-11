import { emitData } from "./socketFront.js";

//socket desde el front end
const d = document;

//DOM ELEMENTS
const $nombre = d.getElementById("nombre");
const $apellido = d.getElementById("apellido");
const $edad = d.getElementById("edad");
const $alias = d.getElementById("alias");
const $output = d.getElementById("output");
const $message = d.getElementById("message");
const $email = d.getElementById("email");
const $btnSend = d.getElementById("send");

d.addEventListener("DOMContentLoaded", (e) => {
    d.addEventListener("click", (e) => {
        if (e.target === $btnSend) {
            emitData($nombre, $apellido, $edad, $alias, $message, $email);
        }
    });
});
