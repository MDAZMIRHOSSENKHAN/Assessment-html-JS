// let heading = document.getElementById("heading");
// console.log(heading);
// let para1 = document.getElementsByClassName("para1");
// console.log(para1);

// //best approach
// let elements = document.querySelector("p");
// console.log(elements);
// let allelements = document.querySelectorAll("p");
// console.log(allelements);

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn was clicked");
//   let a = 5;
//   a++;
//   console.log(a);
// };
// btn1.onclick = (e) => {
//   console.log(e);
// };

btn1.addEventListener("click", () => {
  console.log("Hello");
});
