const automobiles = document.querySelector('.Automobiles');
const clothes = document.querySelector('.Clothes');
const HomeInteriors = document.querySelector('.HomeInterios');
const ComputerTech = document.querySelector('.ComputerTech');
const Equipment = document.querySelector('.Tools');
const Sport = document.querySelector('.Sports-products');
const AnimalPets = document.querySelector('.Animals');
const MachineryTools = document.querySelector('.Machinery');

const headerHero = document.querySelector('.header--hero');
let url = './trend-products/automobiles.json'; 

fetchData(url); 

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            headerHero.innerHTML = ''; // Clear previous content
            data.forEach(product => {
                const brand = product.brand;
                const image = product.image;
                const color = product.color;
                const price = product.price;
                const model = product.model;

                const productHTML = `
                    <div class="description">
                        <h2 class="title">${brand}</h2>
                        <p>${model} <br> ${color} <br> ${price} </p>

                        <button>Learn More</button>

                    </div>
                    <div class="img-blc">
                        <img src="${image}" alt="${brand} ${model}" >
                    </div>
                `;
                headerHero.innerHTML += productHTML;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

clothes.addEventListener('click', () => {
    url = './trend-products/clothes.json';
    fetchData(url);
});

HomeInteriors.addEventListener('click', () => {
    url = './trend-products/homeDecoration.json';
    fetchData(url);
});

ComputerTech.addEventListener('click', () => {
    url = './trend-products/computersTech.json';
    fetchData(url);
});

Equipment.addEventListener('click', () => {
    url = './trend-products/equipment.json';
    fetchData(url);
});
Sport.addEventListener('click', () => {
    url = './trend-products/sportsOutdoor.json';
    fetchData(url);
});


MachineryTools.addEventListener('click', () => {
    url = './trend-products/machinery.json';
    fetchData(url);
});
