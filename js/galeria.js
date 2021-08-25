let lista_imagenes = document.querySelectorAll('#galeria .fotos .img img');
const modal_imagen = document.querySelector('#fixed');


const mostrar_imagen = (event) => {
    const imagen_seleccionado = event.target;
    modal_imagen.classList.remove('oculto_fixed');
    modal_imagen.childNodes[1].setAttribute('src', imagen_seleccionado.getAttribute('src'));
}

const eliminar_imagen = (event) => {
    console.log('click');
    modal_imagen.classList.add('oculto_fixed');
}


for(let i = 0; i < lista_imagenes.length; i++){
    lista_imagenes[i].addEventListener('click', mostrar_imagen);
}

modal_imagen.addEventListener('click', eliminar_imagen);