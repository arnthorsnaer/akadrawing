
var rect = function(element,color,top,left,width,height){
	var ctx = element.getContext("2d");
	ctx.fillStyle = color;
	ctx.fillRect(top,left,width,height);
}

var triangle = function(element,color,firstX,firstY,secondX,secondY,thirdX,thirdY){
	var ctx = element.getContext("2d");

	ctx.fillStyle=color;
	ctx.beginPath();

	ctx.moveTo(firstX,firstY);
	ctx.lineTo(secondX,secondY);
	ctx.lineTo(thirdX,thirdY);
	ctx.closePath();
	ctx.fill();	
}


var house =  function(c){
	rect(c,"orange",330,730,150,75);
	rect(c,"black",330,655,150,75);
	triangle(c,"grey",300,655,400,450,500,655);
	rect(c,"grey",390,735,40,75);
	rect(c,"blue",390,675,30,30);
	rect(c,"blue",340,675,30,30);
	rect(c,"blue",440,675,30,30);

}

var alienbird = function(c){
	triangle(c,"black",200,155,170,250,400,255);
	rect(c,"black",200,250,20,40);
	rect(c,"black",230,250,20,40);
	rect(c,"yellow",230,180,20,20);
	rect(c,"yellow",190,220,20,20);
}

var skygras = function(c){
	rect(c,"green",0,760,1000,40);
	rect(c,"#0099FF",0,0,1000,760);
}

var draw = function(){

	var c = document.getElementById("myCanvas");
	skygras(c);
	house(c);
	alienbird(c);

}

draw();
