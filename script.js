const messages = {
    "Angelo": "Thank u for being a part of my year",
    "Gangan": "Thank u for being a part of my year",
    "Jared": "Thank u for being a part of my year",
    "Emman": "Thank u for being a part of my year",
    "Ashley A": "Thank uuu for guiding me thru uncharted territories",
    "Lian": "Thank u for being kind",
    "Alyssa": "Thank u for being a part of my year",
    "Felix": "Thank u for being a bro for me",
    "Adrian": "Thank u for being a part of my year",
    "Gail": "Thank u for being a part of my year",
    "Sean": "Thank u for being smart",
    "Jean": "Thank u for being a president",
    "Ellaine": "Thank u for being a Señora",
    "Kenji": "Thank u for the opportunities",
    "Reyson": "Thanks Pinsan",
    "Alexia": "Thank u for being a true friend",
    "Jilian": "Thank u for being mataray and mature",
    "Xyrra": "Thank u for being my best friend",
    "John Adrian": "Thank u for being a part of my year",
    "Harold": "Thank u for being a part of my year",
    "John Paul": "Thank u for being a part of my year",
    "Marian": "Thank u for being loud",
    "Shanelle": "Thank u for being a part of my year",
    "Zhandra": "Thank u for your name",
    "Eurie": "Thank u for being one half of a twin",
    "Godwyn": "Thank u for being that quiet kid",
    "Christian": "Thank u for the advices",
    "Mavey": "Thank u for being a part of my year",
    "Kerr": "Good luck with her",
    "Crystal": "Thank u for the Character development",
    "Eunice": "Thank u for being one half of a twin",
    "Ashley P": "Thank u for being open to me"
};

const notFoundMessages = [
    "Don't give up! Try again!",
    "Hmm, I couldn't find that name. Are you sure it's correct?",
    "Keep searching—you're closer than you think!",
    "Oops! That name doesn't seem to exist."
];

function typeMessage(element, text) {
    let i = 0;
    const modifiedText = text.replace(/\s+/g, "_"); // Replace spaces with underscores
    element.innerText = "";
    const interval = setInterval(() => {
        if (i < modifiedText.length) {
            element.innerText += modifiedText.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 50); // Typing speed
}

function playSound() {
    const sound = document.getElementById('successSound');
    sound.play();
}

function showMessage() {
    const name = document.getElementById('nameInput').value.trim();
    const messageElement = document.getElementById('message');
    if (messages[name]) {
        typeMessage(messageElement, messages[name]);
        playSound();
    } else {
        const randomMessage = notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)];
        typeMessage(messageElement, randomMessage);
    }
}

function resetFields() {
    document.getElementById('nameInput').value = "";
    document.getElementById('message').innerText = "";
}