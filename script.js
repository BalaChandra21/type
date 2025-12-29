const quotes = [
    "Practice makes a man perfect",
    "The quick brown fox jumps over the lazy dog",
    "Learning to code improves problem solving skills",
    "Typing speed improves with regular practice",
    "Web development is fun and creative"
];

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");

let time = 60;
let timer;
let started = false;

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

startBtn.onclick = () => {
    quoteEl.innerText = getRandomQuote();
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();

    time = 60;
    timeEl.innerText = time;
    wpmEl.innerText = 0;
    accuracyEl.innerText = 0;

    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        time--;
        timeEl.innerText = time;

        if (time === 0) {
            clearInterval(timer);
            inputEl.disabled = true;
            calculateResult();
        }
    }, 1000);
};

function calculateResult() {
    const typedText = inputEl.value.trim();
    const quote = quoteEl.innerText;

    const wordsTyped = typedText.split(/\s+/).length;
    const wpm = wordsTyped;
    wpmEl.innerText = wpm;

    let correct = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === quote[i]) correct++;
    }

    const accuracy = Math.round((correct / quote.length) * 100);
    accuracyEl.innerText = accuracy || 0;
}
