const net = require("net");
const { IP, PORT } = require("./constants");

// sets up connetion with game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Actions to take upon connecting to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DJK");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = {
  connect,
};