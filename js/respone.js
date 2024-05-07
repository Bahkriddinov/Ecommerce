const automobiles = document.querySelector('.Automobiles')
const clothes = document.querySelector('.Clothes')
const HomeInteriors = document.querySelector('.HomeInterios')
const ComputerTech = document.querySelector('.ComputerTech')
const Equipment = document.querySelector('.Tools')
const Sport = document.querySelector('.Sports-products')
const AnimalPets = document.querySelector('.Animals')
const MachineryTools = document.querySelector('.Machinery')

const headerHero = document.querySelector('.header--hero');



fetch('./trend-products.json')
  .then(response => response.json())
  .then(jsonData => {
    Object.keys(jsonData).forEach(category => {
      console.log(`Category: ${category}`);
      jsonData[category].forEach(product => {
        const brand = product.brand;
        const model = product.model;
        const year = product.year;
        const color = product.color;

        headerHero.innerHTML += `
            <div class="description">
                <h2 class="title">${brand}</h2>
                <p>${model} <br> ${year} <br> ${color}</p>
            </div>
            <div class="img-blc">
                <img src="${product.image}" alt="${brand} ${model}" width="347px" height="302px">
            </div>
        `;
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));
