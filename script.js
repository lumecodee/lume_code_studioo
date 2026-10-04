const botonAlerta = document.querySelector("#botonAlerta");
const alerta = document.querySelector("#alerta");
const cerrar = document.querySelector("#cerrar");
const ok = document.querySelector("#ok");

botonAlerta.addEventListener("click", function () {
    alerta.style.display = "block";
});

cerrar.addEventListener("click", function () {
    alerta.style.display = "none";
});

ok.addEventListener("click", function () {
    alerta.style.display = "none";
});