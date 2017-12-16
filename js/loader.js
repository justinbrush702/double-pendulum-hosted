let window_width = window.innerWidth, window_height = window.innerHeight;
// var aboutRow = document.getElementById('loader-div');
// var rowWidth = aboutRow.getBoundingClientRect().width;
// window_width = rowWidth;

var two = new Two({
  fullscreen: true,
  autostart: true,
  width : window_width * .5,
  height : window_width * .5
}).appendTo(document.getElementById('loader-mount'));

var block_size = (two.width / 20);
// var initSpot = two.makeRectangle( two.width/2, two.height/2, (block_size), block_size);

// var fixture = two.makeRectangle(0, 0, (block_size), block_size);
// var fixture = two.makeRectangle(two.width/2, two.height/3, (block_size), block_size);
var fixture = two.makeRectangle(0, 0, (block_size), block_size);
// var weight = two.

// two has convenience methods to create shapes.
var circle = two.makeCircle(0, (two.height * .4), 40);
// console.log(circle.position.x);

// var circle = two.makeCircle(two.width/2, (two.height * .75), 40);
// var rect = two.makeRectangle(213, 100, 100, 100);

// var circle = two.makeCircle(-70, 0, 50);
// var fixture = two.makeRectangle(70, 0, 100, 100);
//
// The object returned has many stylable properties:
circle.fill = '#FF8000';
circle.stroke = 'orangered'; // Accepts all valid css color
circle.linewidth = 5;
//
//
// var group = two.makeGroup(circle, fixture);
// group.translation.set(two.width / 2, two.height / 2);
// group.scale = 0;
// group.linewidth = 6;
// group.stroke = 'green';





//
//
// // Gets called every "tick"
// two.bind('update', function() {
//   // initSpot.rotation += .001;
// });

// var circle = two.makeCircle(-70, 0, 50);
// var rect = two.makeRectangle(70, 0, 100, 100);
// circle.fill = '#FF8000';
// circle.stroke = 'orangered';
// rect.fill = 'rgba(0, 200, 255, 0.75)';
// rect.stroke = '#1C75BC';
//
// // Groups can take an array of shapes and/or groups.
// var group = two.makeGroup(circle, rect);
//
// // And have translation, rotation, scale like all shapes.
// group.translation.set(two.width / 2, two.height / 2);
// group.rotation = Math.PI;
// group.scale = 0.75;
//
// // You can also set the same properties a shape have.
// group.linewidth = 7;
//
// two.update();


// var circle = two.makeCircle(0, 170, 50);
// var rect = two.makeRectangle(0, 170, 100, 100);
// circle.fill = '#FF8000';
// rect.fill = 'rgba(0, 200, 255, 0.75)';

// var line = two.makeLine(0, 0, two.width/2, 0);

var skinny = two.makeRectangle(0, two.height * .2, 5, two.height * .4);
// var skinny = two.makeRectangle(0, 0, 5, two.height * .4);

skinny.fill = 'green';

var group = two.makeGroup(skinny, circle);

// group.translation.set(two.width / 2, two.height / 3);
group.rotation = Math.PI / 2;
group.scale = 1;
// group.linewidth = 6;
// group.stroke = 'green';

// var big = two.makeCircle();
// group.noStroke();
// group.linewidth = 16;
// console.log('canary');
// group.linewidth = 16;

// Bind a function to scale and rotate the group
// to the animation loop.


var all = two.makeGroup(fixture, group);
all.translation.set(two.width / 2, two.height / 3);
all.scale = .65;


// make another pendulum

var bigFixture = all.clone();
var BIG_FIXURE_SCALE = .7;
bigFixture.scale = BIG_FIXURE_SCALE;


// var bigFixture = two.makeGroup(fixture, group);
// bigFixture.translation.set(two.width / 2, two.height / 3);
// bigFixture.scale = .7;
//
//
// // make another pendulum
//
// var all = bigFixture.clone();
// all.scale = .4;




// console.log(bigFixture.rotation);



var velSmall = 0;
var accB = 0.0045;
var accS = 0.01;
var velLarge = 0;


var hypotenuse = (two.height * .4) * BIG_FIXURE_SCALE;
var bigX = two.width / 2;
var bigY = two.height / 3;

two.bind('update', function(frameCount) {

  // all.rotation += .02;
  if (bigFixture.rotation < -Math.PI/2) {
    velLarge += accB;
  } else {
    velLarge -= accB;
  }
  bigFixture.rotation += velLarge;

  // console.log(bigFixture.rotation);


  // function scaled by hypotenuse, offset by location of bigFixture
  var allX = (Math.cos(bigFixture.rotation + Math.PI)*hypotenuse) + bigX;
  var allY = (Math.sin(bigFixture.rotation + Math.PI)*hypotenuse) + bigY;
  all.translation.set(allX, allY);



  if (group.rotation < 0) {
    velSmall += accS;
  } else {
    velSmall -= accS;
  }
  group.rotation += velSmall;
}).play();
