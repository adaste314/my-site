function clickButton() {
    console.log(`Hello world!`);
    const mytext = document.getElementById("mytext");
    mytext.innerHTML = `It worked!`;
    mytext.className = `myclass`;

    const body = document.body;
    body.style.backgroundColor = bgcolor.value;
}