const net = require("net");

// sets up connetion with game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // Actions to take upon connecting to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = {
  connect,
};