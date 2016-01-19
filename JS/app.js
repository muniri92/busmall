// START OF CODE
var productArray = [];
var count = 0;
// CONSTRUCTOR
function Product(name, src, count) {
  this.names = name;
  this.src = 'img/' + src;
  this.count += 1;
  productArray.push(this);
}
// RANDOM INDEX GENERATOR
function generateRandom() {
  return +(Math.floor((Math.random() * 14)));
};
// CALL FUNCTIONS
var bag = new Product('bag', 'bag.jpg', count);
var banana = new Product('banana', 'banana.jpg', count);
var boots = new Product('boots', 'boots.jpg', count);
var chair = new Product('chair', 'chair.jpg', count)
var cthulhu = new Product('cthulhu', 'cthulhu.jpg', count)
var dragon = new Product('dragon', 'dragon.jpg', count)
var pen = new Product('pen', 'pen.jpg', count)
var scissors = new Product('scissors', 'scissors.jpg', count)
var shark = new Product('shark', 'shark.jpg', count)
var sweep = new Product('sweep', 'sweep.jpg', count)
var unicorn = new Product('unicorn', 'unicorn.jpg', count)
var usb = new Product('usb', 'usb.gif', count)
var waterCan= new Product('waterCan', 'water-can.jpg', count)
var wineGlass= new Product('wineGlass', 'wine-glass.jpg', count)
// PRODUCT ARRAY
var allProducts = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, waterCan, wineGlass ];
// TO AVIOD REPEATING PICTURES
function random() {
  var img1 = document.getElementById('firstImage');
  var rand1 = generateRandom();
  img1.src = allProducts[rand1].src;
  // console.log('you voted for ' + allProducts[rand1].names);
  var img2 = document.getElementById('secondImage');
  var rand2 = generateRandom();
  while (rand1 === rand2 ) {
    rand2 = generateRandom();
  }
  img2.src = allProducts[rand2].src;
  // console.log('you voted for ' + allProducts[rand2].names);
  var img3 = document.getElementById('thirdImage');
  var rand3 = generateRandom();
  while( rand1 === rand3 || rand2 === rand3) {
    rand3 = generateRandom();
  }
  img3.src = allProducts[rand3].src;
  // console.log('you voted for ' + allProducts[rand3].names);
}
random();
// RUN EVENT HANDLER
function handleImage() {
  random();
  if (first) {
    console.log('you voted for ' + allProducts[rand1].names);
  } else if (second) {
    console.log('you voted for ' + allProducts[rand2].names);
  } else if (third) {
    console.log('you voted for ' + allProducts[rand3].names);
  }
}
// RUN EVENT LISTENER FOR FIRST IMAGE
var first = firstImage.addEventListener('click', handleImage)
// RUN EVENT LISTENER FOR SECOND IMAGE
var second = secondImage.addEventListener('click', handleImage);
// RUN EVENT LISTENER FOR THIRD IMAGE
var third =thirdImage.addEventListener('click', handleImage);


if (firstImage.addEventListener('click', handleImage)) {
  console.log('you voted for ' + allProducts[rand1].names);
} else if (secondImage.addEventListener('click', handleImage)) {
  console.log('you voted for ' + allProducts[rand2].names);
} else if (thirdImage.addEventListener('click', handleImage)) {
  console.log('you voted for ' + allProducts[rand3].names);
}
