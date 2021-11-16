let categories = document.querySelectorAll(".item").length;

const items = document.querySelectorAll(".item");
 console.log("number of categories: " + categories)
items.forEach((item) => console.log("category :" + item.firstElementChild.textContent + '\n' +  "elements :" + item.lastElementChild.childElementCount));





