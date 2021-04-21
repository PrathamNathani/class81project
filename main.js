canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.linewidth = 5 ;
ctx.rect(180,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth = 5 ;
ctx.arc(250 , 210 , 40 , 0 , 2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.linewidth = 5 ;
ctx.arc(350 , 210 , 40 , 0 , 2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.linewidth = 5 ;
ctx.arc(460 , 210 , 40 , 0 , 2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth = 5 ;
ctx.arc(300 , 245 , 40 , 0 , 2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.linewidth = 6 ;
ctx.arc(400 , 250 , 40 , 0 , 2 *Math.PI);
ctx.stroke();