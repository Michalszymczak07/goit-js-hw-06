const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");

images.forEach(item=> {
  gallery.insertAdjacentHTML("afterbegin", `<li><img src="${item.url}" alt="${item.alt}" class="image" ></li>`)

  gallery.style.display = "flex";
  gallery.style.listStyle = "none"
  gallery.style.padding = "20px"
  
  const image = document.querySelector(".image")

  image.style.marginRight = "50px";
  image.style.width = "1700px"
  image.style.height = "1200px"
})