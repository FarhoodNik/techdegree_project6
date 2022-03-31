const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btn_reset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector('#phrase ul');
const phrases = ["plant earth", "green grass", "iron maiden", "mad hatter", "pink floyd"];
const phraseArray = getRandomPhraseAsArray(phrases);


btn_reset.addEventListener('click', () =>{
    overlay.style.display = "none";
});

// use to keep track of the number of guesses the player has missed 
let missed = 0;
function getRandomPhraseAsArray (arr){
    let random = Math.floor(Math.random()*arr.length);
    let rand_phr = arr[random].toLowerCase();
    let split_word = rand_phr.split("");
    return split_word;

}
function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0 ; i < arr.length ; i++){
        const li = document.createElement("li");
        li.textContent = arr[i];
        phraseUl.appendChild(li);
        if (arr[i] >= "A" && arr[i] <= "Z"  || arr[i] >= "a" && arr[i] <= "z" ){
            li.className = "letter";
        }else{
            li.className = "space";
        }

    }
    

}
addPhraseToDisplay(phraseArray); 

function ckeckletter(button){
    let letter = document.querySelectorAll(".letter");
    let match = null;
    let li = document.querySelectorAll("li");
    for (let i = 0; i<li.length; i++){
        if (button.textContent === li[i].textContent.toLowerCase()){
            li[i].classList.add('show'); 
            
            match = button.textContent;

        }

    }
    return match
}


qwerty.addEventListener("click", (e) =>{
    let btn = e.target;
    
    if(btn.tagName === "BUTTON"){
        btn.disabled = true;
        btn.className = "chosen";
    }
    let letterFound = ckeckletter(btn);
    console.log(letterFound);
    if(letterFound === null) {
        const lost = document.querySelectorAll(".tries img")[missed];
        lost.src='images/lostHeart.png';
        missed++
        console.log(lost);
    }
    checkWin();
    

});
function checkWin(){
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    let title = document.querySelector(".title");

    if (letter.length === show.length) {
        overlay.className = 'win'; 
        title.textContent = 'You are a winner today';
        overlay.style.display = 'flex';
        btn_reset.style.display = "none";
    } else if (missed > 4 ) {
        overlay.className = 'lose';
        title.textContent = 'Your are a loser today';
        overlay.style.display = 'flex';
        btn_reset.style.display = "none";
    }
    
}







