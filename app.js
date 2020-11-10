'use strict'

var productImageOne = document.getElementById('image-one');
var productImageTwo = document.getElementById('image-two');
var productImageThree = document.getElementById('image-three');





var allProducts = [];

var Product = function(name){
    this.filePath = `img/${name}.jpg`, `img/${name}.gif`, `img/${name}.png`;
    this.title = name;

    allProducts.push(this);

}

new Product ('boots');
new Product ('pen');
new Product ('banana');
new Product ('bag');

function randomIndexOfProductGenerator(){
return Math.floor(Math.random() * allProducts.lenght);
}

function render(productImage){
var randomIndexNumber = randomIndexOfProductGenerator(0, allProducts.lenght-1);



productImage.src = allProducts[randomIndexNumber].filePath;
productImage.title = allProducts[randomIndexNumber].title;


}

render(productImageOne);
render(productImageTwo);
