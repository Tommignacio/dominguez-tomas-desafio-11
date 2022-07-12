const socket = io.connect();

export const emitData = (
    $nombre,
    $apellido,
    $edad,
    $alias,
    $message,
    $email
) => {
    socket.emit("chatData", {
        nombre: $nombre.value,
        apellido: $apellido.value,
        edad: $edad.value,
        alias: $alias.value,
        message: $message.value,
        email: $email.value,
    });
};
