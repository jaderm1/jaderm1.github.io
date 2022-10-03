var i = 0;
var txt = "Olá, me chamo Jader, e convido você a conhecer meu portfólio.";
var speed = 50;
function typeWriter() {
  if (i <=txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
