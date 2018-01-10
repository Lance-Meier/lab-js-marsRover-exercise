var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

/*
var rover2 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
*/


let marsMap = [
  ["B", "X", "O", "O", "O", "X", "O", "X", "O", "O"],
  ["O", "X", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "X", "X", "O", "X", "O", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "X", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O", "X", "X", "O", "O"],
  ["O", "O", "O", "O", "X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "X", "O", "O", "X", "O", "X", "M"],
  ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "X", "O", "M"]
];

function limitCheck () {
  switch (rover.x) {
  case -1:
    rover.x = 0;
    console.log("Off the map! The rover can't go there. Try again");
    break;
  case 10:
    rover.x = 9;
    console.log("Off the map! The rover can't go there. Try again");
    break;
  }
  switch (rover.y) {
  case -1:
    rover.y = 0;
    console.log("Off the map! The rover can't go there. Try again");
    break;
  case 10:
    rover.y = 9;
    console.log("Off the map! The rover can't go there. Try again");
    break;
  }
}

function rockCheckF () {
  if (rover.direction === "N" && marsMap[rover.y][rover.x] === "X") {
      rover.y += 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else if (rover.direction === "S" && marsMap[rover.y][rover.x] === "X") {
      rover.y -= 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else if (rover.direction === "E" && marsMap[rover.y][rover.x] === "X") {
      rover.x -= 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else if (rover.direction === "W" && marsMap[rover.y][rover.x] === "X") {
      rover.x += 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else {
       marsMap[rover.y][rover.x] = "R";
  }
}

function rockCheckB () {
  if (rover.direction === "N" && marsMap[rover.y][rover.x] === "X") {
      rover.y -= 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else if (rover.direction === "S" && marsMap[rover.y][rover.x] === "X") {
      rover.y += 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else if (rover.direction === "E" && marsMap[rover.y][rover.x] === "X") {
      rover.x += 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else if (rover.direction === "W" && marsMap[rover.y][rover.x] === "X") {
      rover.x -= 1;
      marsMap[rover.y][rover.x] = "R";
      console.log("There's a rock in the way. The rover needs to go around. Try again");
    } else {
       marsMap[rover.y][rover.x] = "R";
  }
}

function martianCheck() {
  if (marsMap[rover.y][rover.x] === "M") {
  rover.x = 0;
  rover.y = 0;
  console.log(`Travel History:\n`);
  console.log(rover.travelLog);
  console.log(`\nWOW!!! Hello little creature! You found a Martian. Great work, Mars Rover! Report back to base.\n`);
  }
}

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log(`Rover is now facing West at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "S":
      rover.direction = "E";
      console.log(`Rover is now facing East at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "E":
      rover.direction = "N";
      console.log(`Rover is now facing North at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "W":
      rover.direction = "S";
      console.log(`Rover is now facing South at: X:${rover.x}, Y:${rover.y}`);
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
      console.log(`Rover is now facing East at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "S":
      rover.direction = "W";
      console.log(`Rover is now facing West at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "E":
      rover.direction = "S";
      console.log(`Rover is now facing South at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "W":
      rover.direction = "N";
      console.log(`Rover is now facing North at: X:${rover.x}, Y:${rover.y}`);
      break;
    default:
      console.log("Invalid input (must be L, R, F, B) please try again:");
  }
}

function moveForward(rover){
  console.log("moveForward was called!");
  marsMap[rover.y][rover.x] = "O";
  switch (rover.direction) {
    case "N":
      rover.y -= 1;
      limitCheck ();
      martianCheck ();
      rockCheckF ();
      console.log(`Rover is facing North at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "S":
      rover.y += 1;
      limitCheck ();
      martianCheck ();
      rockCheckF ();
      console.log(`Rover is facing South at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "E":
      rover.x += 1;
      limitCheck ();
      martianCheck ();
      rockCheckF ();
      console.log(`Rover is facing East at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "W":
      rover.x -= 1;
      limitCheck ();
      martianCheck ();
      rockCheckF ();
      console.log(`Rover is facing West at: X:${rover.x}, Y:${rover.y}`);
      break;
    default:
      console.log("Invalid input (must be L, R, F, B) please try again.");
  }
}

function moveBackward(rover){
  console.log("moveBackward was called!");
  marsMap[rover.y][rover.x] = "O";
  switch (rover.direction) {
    case "N":
      rover.y += 1;
      limitCheck ();
      martianCheck ();
      rockCheckB ();
      console.log(`Rover is facing North at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "S":
      rover.y -= 1;
      limitCheck ();
      martianCheck ();
      rockCheckB ();
      console.log(`Rover is facing South at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "E":
      rover.x -= 1;
      limitCheck ();
      martianCheck ();
      rockCheckB ();
      console.log(`Rover is facing East at: X:${rover.x}, Y:${rover.y}`);
      break;
    case "W":
      rover.x += 1;
      limitCheck ();
      martianCheck ();
      rockCheckB ();
      console.log(`Rover is facing West at: X:${rover.x}, Y:${rover.y}`);
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
      marsMap[0][0] = "B";
    }
  }
  console.log(`\nExploration Map: B = Base, R = Rover, X = Rock, M = ?\n`);
  console.log(marsMap);
}

console.log("--Mars Rover Mission--\n");
console.log(`\nAwaiting Command: Forward = F, Backward = B, Turn Left = L, Turn Right = R\n\nType go(""); and enter commands between the "" to get started. Run the command to see the rover move!\n`);
console.log(`Rover is at Base:\n`);
console.log(rover);

//Type in the string:
go("");
