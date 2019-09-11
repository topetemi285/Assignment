//var elementP = document.getElementById("hello");
//elementP.innerHTML = "different text";
//elementP.style.color="green";
var div = document.getElementById("hello");
div.style.backgroundColor="silver";
div.style.height = "100px";
div.style.width = "100px";
div.style.color = "pink";
div.style.padding="50px 50px 50px 10px";
div.style.borderRadius="20px";
div.style.boxShadow="silver 5px 5px 10px";
var p = document.createElement("p");
p.style.color = "green";
p.style.fontStyle="ITALIC";
p.style.fontSize="14px";

//p.style.padding = "10px 30px";
var text = "PETER IS LEARNING JAVASCRIPT AND MY CODE IS NOT RUNNING.........";
p.innerHTML = text;
div.appendChild(p);
console.log(p)