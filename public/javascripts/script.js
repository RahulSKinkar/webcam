function draw(){
  alert('came to draw')
  console.log('draw');
  var canvas = document.getElementById('mycanvas');

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    //drawing code here

    //Rectangle shape
    // ctx.fillRect(25,25,100,100);
    // ctx.clearRect(45,45,60, 60);
    // ctx.strokeRect(50,50,50,50);

    //drawing paths
    // Draw shapes
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true);  // Outer circle

    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // Mouth

    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye

    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye

    ctx.stroke();
  }
  else{

    //canvas unsupported here
    console.log('Please view this page in a modern browser');
  }

}
