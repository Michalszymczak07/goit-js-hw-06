const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingedientsList = document.getElementById("ingredients");

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join('');

console.log(markup);

ingedientsList.innerHTML = markup;