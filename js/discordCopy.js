function copyDiscord() {
    let bubble = document.getElementById("discordSpeechBubbleId");
    navigator.clipboard.writeText("Hello World");

    bubble.innerText = "Copied!"
}