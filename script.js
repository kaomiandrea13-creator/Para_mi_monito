// Pantalla de bienvenida
const entrar = document.getElementById("entrar");
const loader = document.getElementById("loader");
const contenido = document.getElementById("contenido");

entrar.addEventListener("click", () => {
    loader.style.display = "none";
    contenido.style.display = "block";
    window.scrollTo(0, 0);
});

// Secciones
const carta = document.getElementById("carta");
const abrazo = document.getElementById("abrazo");
const recuerdos = document.getElementById("recuerdos");

// Ocultar al iniciar
carta.style.display = "none";
abrazo.style.display = "none";
recuerdos.style.display = "none";

// Mostrar Carta
function abrirCarta() {
    carta.style.display = "block";
    abrazo.style.display = "none";
    recuerdos.style.display = "none";

    carta.scrollIntoView({
        behavior: "smooth"
    });
}

// Mensajes del abrazo
const mensajes = [
    "Aunque no pueda abrazarte ahora, imagina que este monito lo hace por mí. ❤️",
    "Respira un poquito. Todo pasa, y yo creo en ti. 🐵",
    "Eres mucho más fuerte de lo que piensas. 🌺",
    "No tienes que cargar con todo tú solo. ❤️",
    "Kiwi siempre estará feliz de recordarte lo especial que eres. 🫂",
    "Descansa un momento. Mañana también es una oportunidad. 🌙"
];

function mostrarAbrazo() {

    carta.style.display = "none";
    abrazo.style.display = "block";
    recuerdos.style.display = "none";

    const texto = abrazo.querySelector("h3");

    texto.innerHTML =
        mensajes[Math.floor(Math.random() * mensajes.length)];

    abrazo.scrollIntoView({
        behavior: "smooth"
    });

}

// Carrusel
function irCarrusel() {

    carta.style.display = "none";
    abrazo.style.display = "none";
    recuerdos.style.display = "block";

    recuerdos.scrollIntoView({
        behavior: "smooth"
    });

}

// Estado de ánimo
function mostrarEstado() {

    const estado = prompt(
`¿Cómo te sientes?

1. Triste
2. Cansado
3. Estresado
4. Feliz`
);

switch (estado) {

case "1":
alert("❤️ Está bien tener días difíciles. Descansa un poco y recuerda que no estás solo.");
break;

case "2":
alert("🌙 Hoy hiciste suficiente. Date permiso para descansar.");
break;

case "3":
alert("🫂 Respira profundo. Un paso a la vez, monito.");
break;

case "4":
alert("😊 Me alegra mucho saber que estás bien. Espero que sigas sonriendo.");
break;

default:
alert("🐵 Sea como sea que te sientas, gracias por entrar aquí.");
}

}

// Corazones al tocar la pantalla
document.addEventListener("click", function(e){

let corazon = document.createElement("div");

corazon.innerHTML="❤";

corazon.style.position="fixed";
corazon.style.left=e.clientX+"px";
corazon.style.top=e.clientY+"px";
corazon.style.fontSize="24px";
corazon.style.pointerEvents="none";
corazon.style.animation="subir 1.5s linear forwards";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},1500);

});
