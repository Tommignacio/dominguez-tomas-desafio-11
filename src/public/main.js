import { emitData, readData } from "./socketFront.js";

//socket desde el front end
const d = document;

//DOM ELEMENTS
const $chatForm = d.getElementById("chatForm");
const $nombre = d.getElementById("nombre");
const $apellido = d.getElementById("apellido");
const $edad = d.getElementById("edad");
const $alias = d.getElementById("alias");
const $outputChats = d.getElementById("outputChats");
const $mensaje = d.getElementById("mensaje");
const $email = d.getElementById("email");
const $btnSend = d.getElementById("send");



const renderChat = (data) => {
    console.log(data)
    data.forEach(element => {
        $outputChats.innerHTML += `
                <p> ${element.nombre}</p>
                <p> ${element.mensaje}</p>
                `
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
    readData(renderChat)
    d.addEventListener("submit", (e) => {
        e.preventDefault();
        $outputChats.innerHTML = ""
        emitData($nombre, $apellido, $edad, $alias, $mensaje, $email);
    });


});

