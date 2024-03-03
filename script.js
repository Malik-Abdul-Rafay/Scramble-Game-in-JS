const wordText = document.querySelector('.word');
let hintText = document.querySelector('.hint span');
let timeText = document.querySelector('.time b');
let inputField = document.querySelector('input');
let refreshBtn = document.querySelector('.refresh-word');
let checkBtn = document.querySelector('.check-word');

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000)
};

const initGame = () => {
    initTimer(30);
    let randomobj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomobj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];         
    };
     wordText.innerHTML = wordArray.join("");
     hintText.innerHTML = randomobj.hint;
     correctWord = randomobj.word.toLowerCase();
     inputField.value = "";
     inputField.setAttribute("maxlength", correctWord.length)
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert(`Please enter the word to check!`);
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
}

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord)
