const nodeList = document.querySelectorAll("body *");

function randomElementRandomBackground(){
  let rand = Math.floor(Math.random() * nodeList.length);
  nodeList[rand].style.background = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
}
function rand255(){
  return Math.floor(Math.random() * 256);
}

function removeStyle(){
  let rand = Math.floor(Math.random() * nodeList.length);
  nodeList[rand].style = "";
}
//setInterval(randomElementRandomBackground, 2000);
//setInterval(removeStyle, 2000)
