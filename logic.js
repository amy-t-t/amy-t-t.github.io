// call main()
window.onload = main;

function yesButton() {
    const messages = ["good job :)",
                        "get your money up not your funny up >:)",
                        "balls hehe",
                        "keep going"];

    window.alert(messages[Math.floor(Math.random() * messages.length)]);
}

function noButton() {
    const messages = ["yo go study",
                        "you're bawling, not balling",
                        "you miss 100% of the shots you don't take",
                        "it's a cook or get cooked world.\nand you ain't got a chef's hat",
                        "AP, honor roll, all Fs -- you retarded"];

    window.alert(messages[Math.floor(Math.random() * messages.length)]);
}