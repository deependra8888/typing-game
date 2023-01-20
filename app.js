let text = document.getElementById('text');
let word = document.getElementsByClassName('word')[0]
let score = document.getElementsByClassName('right')[0]
let time = document.getElementsByClassName('left')[0];
let box = document.getElementsByClassName('box')[0];
let timeOut = document.getElementsByClassName('time-out')[0];

console.log(box.style.display)

let currentScore = 0;
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];


let gameOver = () => {
    box.style.display = 'none';
    timeOut.innerHTML = `<h1>time ran out</h1>
    <p>your final score is ${currentScore}</p>
    <button class="reloadBtn">Reload</button>`
    timeOut.style = ` background-color: #34495e;
    font-size: 1.5rem;
    font-weight: bold;
    width: 500px;
    height: 200px;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;`
    let reloadBtn = document.getElementsByClassName('reloadBtn')[0];
    reloadBtn.addEventListener('click', () => {
        location.reload();  
    })
}


// gameOver()

let seconds = 0;

let timer = setInterval(() => {
    seconds += 1;
    if(seconds === 10){
        clearInterval(timer)
    }

    time.innerHTML = ` time left : ${seconds}s`
    if(seconds === 10){
        gameOver()
    }
}, 1000)


let randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

let actulWord = randomWord()

word.innerHTML = actulWord

let calScore = () => {
    currentScore += 1;
    score.innerHTML = `score : ${currentScore}`;
}

text.addEventListener('input', (e) => {
    let typedWord = e.target.value
    console.log(typedWord, word.textContent);

    if (word.textContent === typedWord) {
        calScore();
        e.target.value = '';
        word.innerHTML = randomWord()
        seconds = 0;
    }
})


