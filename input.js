// setup interface to handle user input from stdin

let connection;
let counter = 0;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  
  return stdin;
};

// Function handles what happens when certain keys are pressed

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

// Function sends some messages to the server for the player to see

const message = setInterval(() => {
  connection.write("Say: ...another one");
  counter++;
  if (counter % 3 === 0) {
    setTimeout(() => {
      connection.write("Say: WE THE BEST!");
    }, 5000);
  }
  if (counter === 9) {
    clearInterval(message);
  }
}, 10000);


module.exports = {
  setupInput,
};