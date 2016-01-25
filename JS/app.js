'use strict'
// GLOBAL VARIABLES
var productArray = [];
var count = 0;
var allProducts = [new Product('bag', 'bag.jpg'), new Product('banana', 'banana.jpg'), new Product('boots', 'boots.jpg'), new Product('chair', 'chair.jpg'), new Product('cthulhu', 'cthulhu.jpg'), new Product('dragon', 'dragon.jpg'), new Product('pen', 'pen.jpg'), new Product('scissors', 'scissors.jpg'), new Product('shark', 'shark.jpg'), new Product('sweep', 'sweep.jpg'), new Product('unicorn', 'unicorn.jpg'), new Product('usb', 'usb.gif'), new Product('waterCan', 'water-can.jpg'), new Product('wineGlass', 'wine-glass.jpg')];
var rand1, rand2, rand3;
var percentChart  = [];
var displayedChart  = [];
var clickedChart  = [];

// CONSTRUCTOR
function Product(names, src) {
  this.names = names;
  this.src = 'img/' + src;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentClick = 0;
  productArray.push(this);
}

// FUNCTIONS
function percent(obj) {
  if (obj.timesDisplayed === 0) {
    return 0
  } else {
    return obj.percentClick = (obj.timesClicked / obj.timesDisplayed).toFixed(2) * 100;
  }
};
function generateRandom() {
  return +(Math.floor((Math.random() * productArray.length)));
};
function random() {
  var img1 = document.getElementById('firstImage');
  rand1 = generateRandom();
  img1.src = allProducts[rand1].src;
  allProducts[rand1].timesDisplayed++;
  var img2 = document.getElementById('secondImage');
  rand2 = generateRandom();
  while (rand1 === rand2 ) {
    rand2 = generateRandom();
  }
  img2.src = allProducts[rand2].src;
  allProducts[rand2].timesDisplayed++;
  var img3 = document.getElementById('thirdImage');
  rand3 = generateRandom();
  while( rand1 === rand3 || rand2 === rand3) {
    rand3 = generateRandom();
  }
  img3.src = allProducts[rand3].src;
  allProducts[rand3].timesDisplayed++;
};
function clearLS() {
  if(localStorage.chartPersist) {
    productArray = [];
    productArray = JSON.parse(localStorage.chartPersist);
  }
  else {
    localStorage.setItem('chartPersist', JSON.stringify(productArray));
  }
};

// EVENT LISTENERS & HANDLERS
firstImage.addEventListener('click', function(){
  handleImage(allProducts[rand1]);
});
secondImage.addEventListener('click', function() {
  handleImage(allProducts[rand2]);
});
thirdImage.addEventListener('click', function() {
  handleImage(allProducts[rand3]);
});
function handleImage(image) {
  percent(image);
  image.timesClicked += 1;
  count += 1;
  var buttons = document.getElementById('results');
  var imageDelete = document.getElementById('flex-container');
  if (count < 15) {
    random();
  } else {
    dataSets1();
    dataSets2();
    dataSets3();
    buttons.style.display = 'block';
    imageDelete.style.display = 'none';
  }
};
button.addEventListener('click', handleButton);
function handleButton() {
  localStorage.setItem('chartPersist', JSON.stringify(productArray));
  chart1();
  chart2();
};

// FUNCTIONS TO MAKE DATA ARRAY FOR CHARTS
function dataSets1() {
  for (var i = 0; i < allProducts.length; i++){
    percent(productArray[i]);
    percentChart[i] =  productArray[i].percentClick;
  }
};
function dataSets2() {
  for (var i = 0; i < allProducts.length; i++){
    percent(productArray[i]);
    displayedChart[i] =  productArray[i].timesDisplayed;
  }
};
function dataSets3() {
  for (var i = 0; i < allProducts.length; i++){
    percent(productArray[i]);
    clickedChart[i] =  productArray[i].timesClicked;
  }
};

// MAKE CHARTS
var sectionTable = document.getElementById('sectionTable');
function chart1() {
  var nameChart1 = document.getElementById('nameChart1');
  nameChart1.textContent = 'Percent That Item Was Clicked vs Displayed';
  var title1 = document.getElementById("title1");
  var canvasOne = document.getElementById("canvasOne");
  var throwawayNode = title1.removeChild(canvasOne);
  var canvasOne = document.createElement('canvas');
  canvasOne.id = 'canvasOne';
  canvasOne.setAttribute('width', '400');
  canvasOne.setAttribute('height', '400');
  title1.appendChild(canvasOne);
  var data = {
    labels: ['Bag', 'Banana', 'Boots', 'Chair', 'Cthulhu', 'Dragon', 'Pen', 'Scissors', 'Shark', 'Sweep', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'],
    datasets: [
      {
        label: 'Percent of Times Clicked vs Times Displayed',
        fillColor: '#E6E6FA',
        strokeColor: '#E6E6FA',
        highlightFill: "#FFE4B5",
        highlightStroke: "#FFE4B5",
        scaleFontColor: "#DCDCDC",
        data: percentChart
      }
    ]
  };
  var ctx = document.getElementById('canvasOne').getContext('2d');
  var myBarChart = new Chart(ctx).Bar(data);
  document.getElementById('legendOne').innerHTML = myBarChart.generateLegend();
};
function chart2() {
  var nameChart2 = document.getElementById('nameChart2');
  nameChart2.textContent = 'Times Products Were Clicked vs Displayed';
  var title2 = document.getElementById("title2");
  var canvasTwo = document.getElementById("canvasTwo");
  var throwawayNode = title2.removeChild(canvasTwo);
  var canvasTwo = document.createElement('canvas');
  canvasTwo.id = 'canvasTwo';
  canvasTwo.setAttribute('width', '400');
  canvasTwo.setAttribute('height', '400');
  title2.appendChild(canvasTwo);
  var data = {
    labels: ['Bag', 'Banana', 'Boots', 'Chair', 'Cthulhu', 'Dragon', 'Pen', 'Scissors', 'Shark', 'Sweep', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'],
    datasets: [
      {
        label: 'Times Clicked',
        fillColor: "#E6E6FA",
        strokeColor: "#E6E6FA",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        scaleFontColor: "#DCDCDC",
        data: clickedChart
      },
      {
        label: 'Times Displayed',
        fillColor: "#FFE4B5",
        strokeColor: "#FFE4B5",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        scaleFontColor: "#DCDCDC",
        data: displayedChart
      }
    ]
  };
  var ctx = document.getElementById('canvasTwo').getContext('2d');
  var myBarChart2 = new Chart(ctx).Bar(data);
  document.getElementById('legendTwo').innerHTML = myBarChart2.generateLegend();
};

//DECLARE FUNCTIONS
clearLS();
random();
