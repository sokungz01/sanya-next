// import { Server } from "socket.io";

// export default function SockerHandler(req, res) {
//   if (res.socket.server.io) {
//     console.log("Already set up");
//     res.send();
//     return;
//   }
//   const io = new Server(res.socket.server);
//   res.socket.server.io = io;
//   const onConnection = (socket) => {
//     messageHandler(io, socket);
//   };

//   io.on("connection", onConnection);
//   console.log("Setting up socket");
//   res.end();
// }
