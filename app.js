
var imageElementOne = document.getElementById('image-one');
var imageElementTwo = document.getElementById('image-two');
var imageElementThree = document.getElementById('image-three');

var allProducts = [];

imageElementOne.src = 'img/water-can/jpg';
imageElementOne.productName = 'water can';
imageElementTwo.src = 'img/wine-glass/jpg';
imageElementTwo.productName = 'wine glass';
imageElementTwo.src = 'img/sweep/jpg';
imageElementThree.productName = 'sweep boy';

var Products = function(src, name){
    this.filePath = src;
    this.productName = name;

    allProducts.push(this);
}
