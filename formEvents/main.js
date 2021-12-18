// let input = document.querySelector("#myinput");
// let form = document.querySelector("#myform");

// input.addEventListener("focus",function () {
//     console.log("focus oldu");
// })
// input.addEventListener("blur",function () {
//     console.log("blur oldu");
// })
// input.addEventListener("change",function () {
//     console.log("change oldu");
// })
// input.addEventListener("keyup",function () {
//     console.log("keyup oldu");
// })

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (input.value) {
//         form.submit();
//     }
//     else{
//         console.log("problem");
//     }
// })

// let regForm = document.querySelector("#reg-form");
// let passIn = document.querySelector("#pass-input");
// let rePassIn = document.querySelector("#rePass-input");

// regForm.addEventListener("submit",function (e) {
//     e.preventDefault();

//     passIn.classList.remove("is-invalid");
//     rePassIn.classList.remove("is-invalid");

//     let pass = passIn.value;
//     let rePass = rePassIn.value;

//     if (pass.length < 8) {
//         passIn.classList.add("is-invalid");
//         alert("Pass must have at least 8 chars.");
//         return;
//     }

//     if (pass == pass.toLowerCase()) {
//         passIn.classList.add("is-invalid");
//         alert("Pass must have at least 1 uppercase char.");
//         return;
//     }

//     if (!pass.includes("@")) {
//         passIn.classList.add("is-invalid");
//         alert("Pass must have at least 1 @ char.");
//         return;
//     }

//     if (pass != rePass) {
//         rePassIn.classList.add("is-invalid");
//         alert("Pass dont match.");
//         return;
//     }

//     regForm.submit();
// })

let fileIn = document.getElementById("formFile");
let img = document.querySelector("img");

fileIn.addEventListener("change", function (e) {
  let reader = new FileReader();

  reader.onloadend = function (e2) {
    console.log("point2");
    img.src = e2.target.result;
  };

  console.log("point1");

  reader.readAsDataURL(e.target.files[0]);
});
