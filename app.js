'use strict'

var allImagesContainer = document.getElementById('product-images');
var productImageOne = document.getElementById('image-one');
var productImageTwo = document.getElementById('image-two');
var productImageThree = document.getElementById('image-three');

var listElement = document.getElementById('List');

var uniqueRandomImages = [];
var totalVotes = 0;
var allProducts = [];

var Product = function(name, endOfFile){               // constructor for prodecus
    this.filePath = `img/${name}.${endOfFile}`;
    this.title = name;
    this.votes = 0;
    this.views = 0;

    allProducts.push(this);

}


new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('sweep', 'png');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('usb', 'gif');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');

var render = function(){
getUniqueRandomImages();

var firstIndex = uniqueRandomImages[0];
var secondIndex = uniqueRandomImages[1];
var thirdIndex = uniqueRandomImages[2];

productImageOne.src = allProducts[firstIndex].filePath;
productImageOne.title = allProducts[firstIndex].title;
allProducts[firstIndex].views++;

productImageTwo.src = allProducts[secondIndex].filePath;
productImageTwo.title = allProducts[secondIndex].title;
allProducts[secondIndex].views++;

productImageThree.src = allProducts[thirdIndex].filePath;
productImageThree.title = allProducts[thirdIndex].title;
allProducts[thirdIndex].views++;
    
}

function getUniqueRandomImages(){
    uniqueRandomImages = [];
  
    for(var i=0; i<3; i++){
      var randomImage = getRandomImage();
    
      while(uniqueRandomImages.includes(randomImage)){
        randomImage = getRandomImage();
      }
    
      uniqueRandomImages.unshift(randomImage);
    }
  
    while(uniqueRandomImages.length > 3){
        uniqueRandomImages.pop();
    }
  
  }

function getRandomImage(){
return Math.floor(Math.random() * allProducts.length);
}

function voteForProductImages(event){
    var titleOfClick = event.target.title;
    for(var i=0; i<allProducts.length; i++){
      if(titleOfClick === allProducts[i].title){
        allProducts[i].votes++;
        totalVotes++;

        
      }
    }

    render();

    function renderResults() {
      for (var i = 0; i < allProducts.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes, and was seen ${allProducts[i].views} times.`;
        catalogList.appendChild(li);
      }
    }
    renderResults();
    

  if(totalVotes === 5){
    allImagesContainer.removeEventListener('click', voteForProductImages);
  }

}

allImagesContainer.addEventListener('click', voteForProductImages);

render();
renderResults();


//////////////////////////////////////////////////////////




/*function render(productImage){
var randomIndexNumber = randomIndexOfProductGenerator(0, allProducts.lenght-1);



productImage.src = allProducts[randomIndexNumber].filePath;
productImage.title = allProducts[randomIndexNumber].title;


}

render(productImageOne);
render(productImageTwo);

productImageOne.src = allProducts[firstIndex].filePath;
productImageOne.title = allProducts[firstIndex].title;
allProducts[firstIndex].views++;

productImageTwo.src = allProducts[secondIndex].filePath;
productImageTwo.title = allProducts[secondIndex].title;
allProducts[secondIndex].views++;

productImageThree.src = allProducts[thirdIndex].filePath;
productImageThree.title = allProducts[thirdIndex].title;
allProducts[thirdIndex].views++;*/