
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

rightIcons = document.querySelectorAll(".right-icons a");
rightIcons.forEach(element => {
 // element.preventDefault();
  element.addEventListener("click", function(){
    event.preventDefault();
    this.classList.remove("notifications");
    if(element.dataset.count){
      ul = document.createElement("ul");
      ul.style = "position: absolute; font-size: 12px; list-style-type: none; top: 50px; right: 5%; background-color: #fff; color: #000; padding: 10px; border-radius: 5px;";
      let countNotification = +element.dataset.count > 10 ? 10: +element.dataset.count + 1;
      for(let i = 1; i < countNotification; i++){
        li = document.createElement("li");
        li.innerText = `Уведомление номер ${i}`;
        ul.appendChild(li);
      }
    
        element.appendChild(ul);
        element.dataset.count = '';
    }
    

  })
  element.addEventListener("blur", function(){
    let ul = element.querySelector('ul');
    if(ul){
      ul.style = "display: none;"
    }  
  })

 
});

let create = document.querySelector("#create-post");
create.addEventListener("click", function(){
  event.preventDefault();
  post = document.querySelector("section");

  post2 = post.cloneNode(true);
  document.querySelector("main").appendChild(post2);
})
let hideItems = document.querySelectorAll(".hide");
setInterval(() => hideItems = document.querySelectorAll(".hide"), 2000);


console.log(hideItems);
hideItems.forEach(element => {
  element.addEventListener("click", () => {
    parent = element.closest("section");
    parent.style.display = "none";
  })
});

