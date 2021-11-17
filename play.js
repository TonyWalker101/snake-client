const { connect } = require("./client");
const { setupInput } = require("./input");

// lets player know they're attempting to connect to the server
console.log("Connecting ...");

// lets the setupInput communicate with the server via the conn object
let conn = connect();
setupInput(conn);