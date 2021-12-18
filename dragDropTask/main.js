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
