// funcion para mostrar el menu y cambiar los iconos que se despliegan
function showMenu() {
	document.getElementById("menu").classList.toggle("mov-center");//Mostrar el menu en tipo flex con la clase css show

	var menuI = document.getElementById("menuIcon"); // declaracion de la variable pora el tratamiento de las clases

  if (menuI.classList.contains("fa-bars") == true) { //"contains" es para verificar si existe una clase determinada
    menuI.classList.remove("fa-bars");
    menuI.classList.add("fa-times");
  } else {
    menuI.classList.remove("fa-times");
    menuI.classList.add("fa-bars");
  }
}
// funciones para suprimir clases en el menú
function suprimirClaseMain() {
  document.getElementById("sectiMain").classList.remove("mov-center");
  document.getElementById("sectiMain").classList.add("mov-right");
}
function suprimirClasePorta() {
  document.getElementById("sectiPorta").classList.remove("mov-center");
  document.getElementById("sectiPorta").classList.add("mov-right");
}
function suprimirClaseServi() {
	document.getElementById("sectiServi").classList.remove("mov-center");
	document.getElementById("sectiServi").classList.add("mov-right");
}  
function suprimirClaseConta() {
  document.getElementById("sectiConta").classList.remove("mov-center");
  document.getElementById("sectiConta").classList.add("mov-right");
}
// funciones para mostar clases en el menu
function mostrarClaseMain(){
  document.getElementById("sectiMain").classList.remove("mov-right");
  document.getElementById("sectiMain").classList.add("mov-center");
}
function mostarClasePorta() {
  document.getElementById("sectiPorta").classList.remove("mov-right");
  document.getElementById("sectiPorta").classList.add("mov-center");
}
function mostrarClaseServi() {
  document.getElementById("sectiServi").classList.remove("mov-right");
  document.getElementById("sectiServi").classList.add("mov-center");
}
function mostarClaseConta() {
  document.getElementById("sectiConta").classList.remove("mov-right");
  document.getElementById("sectiConta").classList.add("mov-center");
}
// funciones para el menú

function showMain() {
  mostrarClaseMain();
  suprimirClasePorta();
  suprimirClaseServi();
  suprimirClaseConta();
  showMenu();
}
function showPorta() {
  mostarClasePorta();
  suprimirClaseMain();
  suprimirClaseServi();
  suprimirClaseConta();
  showMenu();
}
function showServi() {
  mostrarClaseServi();
  suprimirClaseMain();
  suprimirClasePorta();
  suprimirClaseConta();
  showMenu();
}
function showConta() {
  mostarClaseConta();
  suprimirClaseMain();
  suprimirClasePorta();
  suprimirClaseServi();
  showMenu();
}
