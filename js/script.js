function insert(num){
    document.querySelector('.screen').innerHTML += num;
}
function clean(){
    document.querySelector(".screen").innerHTML = "";
}
function backspace(){
    let screen = document.querySelector(".screen").innerHTML;
    document.querySelector(".screen").innerHTML = screen.substring(0, screen.length -1);
}
function sum() {
    let screen = document.querySelector(".screen").innerHTML;
    if(screen) {
        document.querySelector(".screen").innerHTML = eval(screen);
    }else{
        document.querySelector(".screen").innerHTML = "Nenhum comando."
    }
}

document.addEventListener("keydown", function(event) {
    var tecla = event.key;
    if (tecla >= "0" && tecla <= "9" || tecla === "." || tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
      event.preventDefault();
      if (tecla === "Enter") {
        sum();
      } else if (tecla === "Backspace") {
        backspace();
      } else {
        insert(tecla);
      }
    }
  });