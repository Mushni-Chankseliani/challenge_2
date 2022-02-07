function onUserInput(event) {
    const { value: pickedColor } = event.target;
    document.body.style.backgroundColor = pickedColor;
}

document.getElementById("exampleColorInput").addEventListener("input", onUserInput);
