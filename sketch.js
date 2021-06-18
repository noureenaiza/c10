var marks = [30,35,45,40,38]
console.log(marks)

function score_average()
{
  var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var avg = sum/marks.length;
  console.log(avg)
}


function setup() {
  createCanvas(400, 400);
  score_average()
}

function draw() {

  background(220);
}