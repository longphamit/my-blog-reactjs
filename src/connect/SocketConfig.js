import io from "socket.io-client";
import SockJsClient from "react-stomp";
export const connectServerSocketNodeJs = async () => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling", "flashsocket"],
      credentials: true,
    });
    socket.on("room", (message) => console.log(message));
    return socket;
};