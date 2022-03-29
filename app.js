const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btn_reset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector('#phrase ul');
const phreases = ["planrt earth", "green grass", "iron maiden", "mad hatter", "pink floyd"];
//const phraseArray = getRandomPhraseAsArray(phrases);


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


    }
}





