// setup interface to handle user input from stdin

let connection;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
};

// setTimeout(() => {
//   connection.write("Say: Call me the Pied Piper - lets do this")
// }, 5000);

let counter = 0;

let message = setInterval(() => {
  connection.write("Say: ...another one");
  counter += 1;
  if (counter % 3 === 0) {
    setTimeout(() => {
      connection.write("Say: WE THE BEST!")
    }, 5000);
  }
  if (counter === 6) {
    clearInterval(message);
  }
}, 10000);


module.exports = {
  setupInput,
};