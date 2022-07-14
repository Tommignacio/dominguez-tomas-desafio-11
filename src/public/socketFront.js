const socket = io.connect();

export const emitData = (
    $nombre,
    $apellido,
    $edad,
    $alias,
    $mensaje,
    $email
) => {
    socket.emit("chatData", {
        nombre: $nombre.value,
        apellido: $apellido.value,
        edad: $edad.value,
        alias: $alias.value,
        mensaje: $mensaje.value,
        email: $email.value,
    });
};

//lee data de la DB
export const readData = (callback) => {
    socket.on("DBdata:authors", callback)
    socket.on("DBdata:messages", callback)
}




