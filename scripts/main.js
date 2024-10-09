const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sisyphus3.jpg") {
    myImage.setAttribute("src", "images/sisyphus2.jpg");
  } else {
    myImage.setAttribute("src", "images/sisyphus3.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Webdev is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};