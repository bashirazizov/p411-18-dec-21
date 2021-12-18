// let draggable = document.querySelector(".draggable");
// let droppables = document.querySelectorAll(".droppable");

// draggable.ondragstart = function () {
//     console.log("Drag Started");
//     draggable.style.border = "5px solid red";
// }

// draggable.ondragend = function () {
//     console.log("Drag Ended");
//     draggable.style.border = "0px solid red";
// }

// draggable.ondrag = function () {
//     console.log("Dragging");
// }

// droppable.ondragenter = function () {
//     console.log("Drag Entered");
//     droppable.style.border = "5px dashed red";
// }

// droppable.ondragleave = function () {
//     console.log("Drag Leave");
//     droppable.style.border = "0px dashed red";
// }


let draggables = document.querySelectorAll(".draggable");
let droppables = document.querySelectorAll(".droppable");

let draggingElemId;

for (const item of draggables) {
    item.ondragstart = function () {
        draggingElemId = item.getAttribute("id");
    }
}

for (const item of droppables) {
  item.ondragover = function (e) {
    item.style.border = "5px dashed red";
    e.preventDefault();
  };
  item.ondragleave = function () {
    item.style.border = "0px dashed red";
  }
  item.ondrop = function () {
    item.append(document.getElementById(draggingElemId));
    item.style.border = "0px dashed red";
  };
}
