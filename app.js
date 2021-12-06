// Html code :     <button>Press me !</Button>

// click event demo............................................addEventListener(type,listener,optional)...
const button = document.querySelector("button");

function pressButton(){
    alert("Hello Welcome here !");
}

button.addEventListener("click",pressButton,false);
