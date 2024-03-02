let keyCode = document.getElementById("code"); 
let KeyPress = document.getElementById("number");

document.onkeydown = (event) =>{
  KeyPress.innerHTML = `<span>Key Pressed-></span> <span class="eventKey">${event.key}</span>`;
  keyCode.innerHTML = `<span>Key Code-></span> <span class="eventKey">${event.keyCode}</span>`;
}