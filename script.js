const emojis = ["👽","👽","😡","😡","🤡","🤡","👹","👹","💩","💩","👾","👾","🙉","🙉","🐼","🐼"];
var shufEmo = emojis.sort(() => (Math.random() > .5) ? 2:-1);
let moves = document.querySelector('#spann');
let moveCount = 0;

console.log(shufEmo);



for (let i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = "items";
    box.innerHTML = shufEmo[i];
    box.style.background = "rgb(243, 50, 64)";

    box.addEventListener("click", event =>{
        box.classList.add('boxOpen')
        setTimeout(() =>{
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                    moveCount++;
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch') // flip it to back 
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen') // flip again to shot the emoji
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen') // we do that to remove the boxOpen to reset the index of boxOpen

                    if(document.querySelectorAll('.boxMatch').length == emojis.length){
                        alert('you win')
                    }
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    moveCount++;
                }
                moves.innerHTML = "Moves:" + moveCount;
            }
        }, 700);
    })

    document.querySelector('.game').appendChild(box); // put the fucking box inside the game div
}