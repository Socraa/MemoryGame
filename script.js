const emojis = ["👽","👽","😡","😡","🤡","🤡","👹","👹","💩","💩","👾","👾","🙉","🙉","🐼","🐼"];
var shufEmo = emojis.sort(() => (Math.random() > .5) ? 2:-1);

console.log(shufEmo);



for (let i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = "items";
    box.innerHTML = shufEmo[i];
    box.style.background = "rgb(243, 50, 64)";

    box.addEventListener("click", event =>{
        box.classList.add('boxOpen');
    })

    document.querySelector('.game').appendChild(box); // put the fucking box inside the game div
}