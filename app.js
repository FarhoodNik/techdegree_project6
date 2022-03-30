const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btn_reset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector('#phrase ul');
const phrases = ["planrt earth", "green grass", "iron maiden", "mad hatter", "pink floyd"];
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
    let letter = document.querySelector(".letter");
    let match = null;
    for (let i = o; i<letter.length; i++){
        if (button.textContent === letter[i]){
            li.appendChild(letter[i]);
            letter[i].className = "show";
            match = button.textContent;

        }else{
            return match;
        }

    }
}

qwerty.addEventListener("click", (e) =>{
    let btn = e.target;
    
    if(btn.tagName === "BUTTON"){
        btn.disabled = true;
        btn.className = "chosen";
    }
    let letterFound = ckeckletter(button);
    

});







