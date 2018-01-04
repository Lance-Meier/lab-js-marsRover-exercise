var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

/* Use for future functions
const marsMap = [
  ["O", "O", "O", "O", "O", "X", "O", "X", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "X", "O", "X", "X", "O", "X", "O", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "X", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O", "X", "X", "O", "O"],
  ["O", "O", "O", "O", "X", "O", "X", "O", "O", "O"],
  ["O", "X", "O", "O", "O", "O", "O", "O", "X", "O"],
  ["O", "O", "O", "X", "O", "O", "X", "O", "O", "A"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "0"],
  ["O", "O", "O", "O", "O", "O", "O", "X", "O", "A"]
];
*/

function limitCheck () {
  switch (rover.x) {
  case -1:
    rover.x = 0;
    console.log("Off the grid! The rover can't go there. Try again");
    break;
  case 11:
    rover.x = 10;
    console.log("Off the grid! The rover can't go there. Try again");
    break;
  }
    switch (rover.y) {
  case -1:
    rover.y = 0;
    console.log("Off the grid! The rover can't go there. Try again");
    break;
  case 11:
    rover.y = 10;
    console.log("Off the grid! The rover can't go there. Try again");
    break;
  }
}
/* functions to be added in:


function rockCheck () {
  console.log("There's a rock in the way. The rover needs to go around. Try again")
}

function martianCheck() {
  console.log("WOW!!! Who's this little creature? You found a Martian. You rock, Mars Rover! Report back to base.")
}

*/

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing West at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing South at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    default:
      console.log("Invalid input (must be L, R, F, B) please try again:");
      console.log(rover);
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing East at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "E":
      rover.direction = "W";
      console.log("Rover is now facing South at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing North at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    default:
      console.log("Invalid input (must be L, R, F, B) please try again:");
  }
}

function moveForward(rover){
  console.log("moveForward was called!");
  switch (rover.direction) {
    case "N":
      rover.y -= 1;
      limitCheck ();
      console.log("Rover is facing North at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "S":
      rover.y += 1;
      limitCheck ();
      console.log("Rover is facing South at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "E":
      rover.x += 1;
      limitCheck ();
      console.log("Rover is facing East at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "W":
      rover.x -= 1;
      limitCheck ();
      console.log("Rover is facing West at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    default:
      console.log("Invalid input (must be L, R, F, B) please try again.");
  }
}

function moveBackward(rover){
  console.log("moveBackward was called!");
  switch (rover.direction) {
    case "N":
      rover.y += 1;
      limitCheck ();
      console.log("Rover is facing North at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "S":
      rover.y -= 1;
      limitCheck ();
      console.log("Rover is facing South at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "E":
      rover.x -= 1;
      limitCheck ();
      console.log("Rover is facing East at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    case "W":
      rover.x += 1;
      limitCheck ();
      console.log("Rover is facing West at:");
      console.log(`${rover.x}, ${rover.y}`);
      break;
    default:
      console.log("Invalid input (must be L, R, F, B) please try again.");
  }
}

function go (input) {
  for (var i = 0; i < input.length; i++) {
    if (rover.x >= 0 && rover.x <= 10 && rover.y >= 0 && rover.y <= 10) {
      if (input[i] === "f" || input[i] === "F") {
      moveForward(rover);
      } else if (input[i] === "l" || input[i] === "L") {
        turnLeft(rover);
      } else if (input[i] === "r" || input[i] === "R") {
        turnRight(rover);
      } else if (input[i] === "b" || input[i] === "B") {
        moveBackward(rover);
      } else {
        console.log("Invalid input (must be L, R, F, or B) please try again.");
      }
      rover.travelLog.push(`${rover.x}, ${rover.y}`);
    }
  }
  console.log(rover.travelLog);
}

// TEST COMMAND: Uncomment Below to run it
// go("rflfffff");
