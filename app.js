'use strict'

var allImagesContainer = document.getElementById('product-images');
var productImageOne = document.getElementById('image-one');
var productImageTwo = document.getElementById('image-two');
var productImageThree = document.getElementById('image-three');

var listElement = document.getElementById('List');

var uniqueRandomImages = [];
var totalVotes = 0;
var allProducts = [];
var namesArray = [];
var votesArray =[];

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

function renderResults() {
  for (var i = 0; i < allProducts.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${allProducts[i].title} had ${allProducts[i].votes} votes, and was seen ${allProducts[i].views} times.`;
    listElement.appendChild(li);
  }
}

function voteForProductImages(event){
    var titleOfClick = event.target.title;


    console.log(titleOfClick);
    for(var i=0; i<allProducts.length; i++){
      if(titleOfClick === allProducts[i].title){
        allProducts[i].votes++;
        totalVotes++;

       
        var stringifiedImages = JSON.stringify(allProducts);
        localStorage.setItem('product-images', stringifiedImages);

      }
    }

    render();
    
    
    

    if(totalVotes === 25){
      productImageOne.removeEventListener('click', voteForProductImages);
      productImageTwo.removeEventListener('click', voteForProductImages);
      productImageThree.removeEventListener('click', voteForProductImages);
      generateChart();
      generateChartData();
      renderResults();

  }

}

productImageOne.addEventListener('click', voteForProductImages);
productImageTwo.addEventListener('click', voteForProductImages);
productImageThree.addEventListener('click', voteForProductImages);



function generateChartData(){
  for(var i=0; i<allProducts.length; i++){
    namesArray.push(allProducts[i].title);
    votesArray.push(allProducts[i].votes);
  }
}

function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: namesArray, 
          datasets: [{
              label: '# of Votes',
              data: votesArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}

render();
