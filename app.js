
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
/* */
let addRelations = (item) => {
    let active = document.querySelector(`.${item}`);
    let button = document.querySelector(`#button-${item}-1`);
    button.onclick = () => {
    classes = active.children[0].classList;
    classes.toggle('active');

    active.children[1].classList.toggle('active');
    active.children[1].innerText = classes.contains('active') ? 
                             +active.children[1].innerText + 1 :
                              +active.children[1].innerText - 1;
    }
}

addRelations('like');
addRelations('share');






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
