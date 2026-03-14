import WebSocket, {WebSocketServer} from "ws";

function createWebSocketServer(server) {
    const wss = new WebSocketServer({server, path: "/ws"});

    wss.on("connection", (ws) => {
        console.log("WebSocket client connected");

        ws.on("message", (msg) => {
            console.log("Received:", msg.toString());
            ws.send(`Server received: ${msg}`);
        });

        ws.send("Welcome to WebSocket server!");
    });

    return wss;
}

export default createWebSocketServer;
