// ------------------------------- Tags del DOM -------------------------------
const carrusel = document.querySelector('.slider ul');
const boton_retroceder = document.querySelector('.boton_atras');
const boton_avanzar = document.querySelector('.boton_delante');
// ----------------------------------------------------------------------------


// ----------------------------- Variables extras -----------------------------
const total_diapositivas = carrusel.children.length;
let avance = 0;
// ----------------------------------------------------------------------------




// --------------------------------- Funciones ---------------------------------
const mover = porcentaje => {
    carrusel.style.marginLeft = porcentaje;
    console.log('se ha movido');
}


const avanzar = e => {
    if(avance !== total_diapositivas - 1){ avance++ }
    let cantidad_desplazamiento = '-' + (avance * 100) + '%';
    mover(cantidad_desplazamiento);
};


const retroceder = e => {
    if(avance !== 0){ avance-- }
    let cantidad_desplazamiento = '-' + (avance * 100) + '%';
    mover(cantidad_desplazamiento);
};
// -----------------------------------------------------------------------------




// ---------------------------------- Eventos ----------------------------------
boton_avanzar.addEventListener('click', avanzar);
boton_retroceder.addEventListener('click', retroceder);
// -----------------------------------------------------------------------------