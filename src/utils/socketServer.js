//socket desde el servidor
import { authorsDao as api } from "../daos/index.js";



export const socketServer = (io) => {
    io.on("connection", async (socket) => {
        console.log("conection socket");
        //lee la base de datos autores
        const authors = await api.getAll();
        console.log(authors)
        //recibe los datos del mensaje con el usuario desde el front
        socket.on("chatData", (data) => {
            console.log(data)
        })
    })
}