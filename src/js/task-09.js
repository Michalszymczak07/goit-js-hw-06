function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let color = getRandomHexColor;
const button = document.getElementsByTagName('button');

let span = document.getElementsByTagName('span');







function changebackground() {
  document.body.style.backgroundColor = color();
  span[0].textContent = color()
}



console.log(color())




button[0].addEventListener('click', changebackground);