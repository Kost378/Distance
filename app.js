
let showMenu = function(){
  let popup = document.querySelector('.right-nav');
  let show = document.querySelector('.show-menu');
	show.onclick = function(){
		popup.classList.toggle('show');
	};
  //console.dir(popup);
};
showMenu();

let items = document.querySelectorAll('.right-icons a')
console.log(items[2]);

for(let i = 0; i < items.length - 1; i++){
  if(Math.round(Math.random())){
    items[i].dataset.count = Math.ceil(Math.random() * 20) + '';
    items[i].classList.toggle("notifications");
  }

}

let like = function(){
  let like = document.querySelector(".like");
  let button = document.querySelector("#button-like-1");
  button.onclick = function(){
    like.children[0].classList.add('active');
    like.children[1].classList.add('active');
    like.children[1].innerText = +like.children[1].innerText + 1;
  }
}
like();

let share = function(){
  let share = document.querySelector(".share");
  let button = document.querySelector("#button-share-1");
  button.onclick = function(){
    share.children[0].classList.add('active');
    share.children[1].classList.add('active');
    share.children[1].innerText = +share.children[1].innerText + 1;    
  }
}
share();









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
