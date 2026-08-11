/* ===================================================
   SOFI XV
   FUNCIONES PRINCIPALES
=================================================== */


/* ==============================
   ACORDEÓN
============================== */

function toggleDetalle(boton) {

    const acordeon = boton.parentElement;

    acordeon.classList.toggle("abierto");

}


/* ==============================
   COPIAR DATO
============================== */

function copiarDato(id, boton) {

    const elemento = document.getElementById(id);

    if (!elemento) {
        return;
    }

    const dato = elemento.textContent.trim();

    const textoOriginal = boton.innerHTML;


    navigator.clipboard.writeText(dato).then(function () {

        boton.innerHTML =
            '<i class="fa-solid fa-check"></i> ¡Copiado!';

        boton.classList.add("copiado");


        setTimeout(function () {

            boton.innerHTML = textoOriginal;

            boton.classList.remove("copiado");

        }, 2000);

    }).catch(function () {

        boton.innerHTML =
            '<i class="fa-solid fa-xmark"></i> No se pudo copiar';

        setTimeout(function () {

            boton.innerHTML = textoOriginal;

        }, 2000);

    });

}