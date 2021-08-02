var mouseEvent="empty";
var lastpositionX,lastpositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthoftheline=1;
radius=0;
canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e)
{
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",My_mouseup);
function My_mouseup(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",My_mouseleave);
function My_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",My_mousemove);
function My_mousemove(e)
{
    color = document.getElementById("color").value; console.log(color);
    widthoftheline=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
   mouse_x=e.clientX-canvas.offsetLeft;
   mouse_y=e.clientY-canvas.offsetTop;
   if (mouseEvent=="mouseDown")
   {
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=widthoftheline;
       console.log("last position of x and y codinant");
       console.log("x="+mouse_x+",y="+mouse_y);
       ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
       ctx.arc(lastpositionX,lastpositionY,radius,0,2*Math.PI);
       console.log("corent position of x and y codinant");
       console.log("x="+mouse_x+",y="+mouse_y);
       ctx.stroke();
   }
   lastpositionX=mouse_x;
   lastpositionY=mouse_y;
}
function clearArea()
 {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 }