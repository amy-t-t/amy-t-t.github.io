// call main()
window.onload = main;

function yesButton() {
    const messages = ["good job :)",
                        "get your money up not your funny up >:)",
                        "balls hehe"];

    window.alert(messages[Math.floor(Math.random() * messages.length)]);
}

function noButton() {
    const messages = ["yo go study",
                        "you're bawling, not balling"];

    window.alert(messages[Math.floor(Math.random() * messages.length)]);
}