const campor_texto_formulario_foto = document.querySelector('#comentario');
const boton_formulario_foro = document.querySelector('#boton');
const espacio_preguntas = document.querySelector('#preguntas');
const caracteres = document.querySelector('#caracter_len');



let lista_preguntas = [];



const generar_evento_denunciar = () => {
    const boton_denunciar = document.querySelectorAll('.btn_denunciar');

    for(let i = 0; i < boton_denunciar.length; i++){
        boton_denunciar[i].addEventListener('click', eliminar_coment);
    }
}



const generar_evento_respuesta = () => {
    const boton_responder = document.querySelectorAll('.btn_responder');

    for(let i = 0; i < boton_responder.length; i++){
        boton_responder[i].addEventListener('click', responder_coment);
    }
}


const enviar_comentario = (e) => {
    e.preventDefault();

    let datos_pregunta = campor_texto_formulario_foto.value;

    if(datos_pregunta === ''){
        campo_vacio();
    }else{
        generamos_pregunta(datos_pregunta);
        swal("¡¡Bien hecho!!", "En breve tu pregunta sera respondida", "success");


        generar_evento_denunciar();
        generar_evento_respuesta();
    }

    campor_texto_formulario_foto.value = '';
    caracteres.innerHTML = 0;
};



const campo_vacio = () => {
    swal("Campo Vacio", "Llena el campo de pregunta", "error");
};



const generamos_pregunta = (datos_pregunta) => {
    let plantilla = `
            <div class="wrap" class="tarjeta_pregunta">
                <div class="content_question">
                    <figure class="imagen_usuario">
                        <img src="img/usuario_prueba.jfif" alt="usuario de prueba">
                    </figure>
                    
                    <div class="question">
                        <h4 class="subtitulo">pregunta</h4>
                        <p>${datos_pregunta}</p>
                    </div>
                    
                    <div class="botones_preguntas">
                        <a href="#" class="btn_responder">responder</a>
                        <a href="#" class="btn_denunciar">denunciar</a>
                        <a href="#" class="btn_compartir">compartir</a>
                    </div>
                </div>
            </div>
    `;

    $('#preguntas').append(plantilla);
    agregar_escucha_a_respuesta_compartir();
    
};



const responder_coment = (e) => {
    e.preventDefault();


    // Generar campo de respuesta de pregunta
    const elemento_responder = e.target;

    const botonera = elemento_responder.parentNode;
    botonera.style.display = 'none';

    const pregunta_respondida = elemento_responder.parentNode.parentNode;


    // Plantilla respuesta
    let plantilla_respuesta = `
    <div class="wrap" class="tarjeta_respuesta">
        <div class="content_question response">
            <figure class="imagen_usuario">
                <img src="img/extragno_prueba.jpeg" alt="usuario de prueba">
            </figure>
            
            <div class="question">
                <h4 class="subtitulo">respuesta</h4>

                <textarea class="edit_response" placeholder="Ingresa tu respuesta"></textarea>
                <article class="botones_interaccion_respuesta">
                    <a href="#" class="boton_respuesta cancelar">cancelar</a>
                    <a href="#" class="boton_respuesta respuesta">responder</a>
                </article>
            </div>
        </div>
    </div>
    `;

    // Convertir String a Objeto HTML
    let html_object = $(plantilla_respuesta);

    pregunta_respondida.after(html_object[0]);
    console.log(pregunta_respondida.children);

    agregar_escucha_a_respuesta_cancelar();
    agregar_escucha_a_respuesta_responder();
};


const agregar_escucha_a_respuesta_compartir = () => {
    const boton_compartir = document.querySelectorAll('.btn_compartir');

    for(let i = 0; i < boton_compartir.length; i++){
        boton_compartir[i].addEventListener('click', mensaje_compartir);
    }
};


const mensaje_compartir = (e) => {
    e.preventDefault();

    const mensaje_comparticion = 'Este es tu enlace para conpartir tu intereacción con tus amigos "https://ard-music.com/interaccion_ard"';

    swal("¡¡Compartenos con tus amigos!!", mensaje_comparticion);
}



const agregar_escucha_a_respuesta_cancelar = () => {
    const botones_cancelar = document.querySelectorAll('.boton_respuesta.cancelar');

    for(let i = 0; i < botones_cancelar.length; i++){
        botones_cancelar[i].addEventListener('click', remover_accion_respuesta);
    }
};




const agregar_escucha_a_respuesta_responder = () => {
    const botones_responder = document.querySelectorAll('.boton_respuesta.respuesta');

    for(let i = 0; i < botones_responder.length; i++){
        botones_responder[i].addEventListener('click', enviar_accion_respuesta);
    }
};


const enviar_accion_respuesta = (e) => {
    e.preventDefault();

    const elemento_seleccionado = e.target;
    const padre = elemento_seleccionado.parentNode.parentNode;
    const hijos_del_elemento_padre = elemento_seleccionado.parentNode.parentNode.children;

    const valor_text_area = hijos_del_elemento_padre[1].value;

    if(valor_text_area === ''){
        swal("Campo vacio", "Las respuestas no pueden estar vacias", "error");
    }else{
        let text = `<p>${valor_text_area}</p>`;
        const html_obj = $(text);

        hijos_del_elemento_padre[1].replaceWith(html_obj[0]);
        hijos_del_elemento_padre[2].remove();


        const botoneras = document.querySelectorAll('.botones_preguntas');
    
        for(let i = 0; i < botoneras.length; i++){
            botoneras[i].style.display = 'flex';
        }

        
        const text_eliminar = `
            <div class="botones_preguntas">
                <a href="#" class="btn_denunciar_respuesta">denunciar</a>
            </div>
        `;
        
        const ultimo_boton = $(text_eliminar);
        padre.after(ultimo_boton[0]);


        agregar_evento_eliminar_respuesta();
    }
};


const agregar_evento_eliminar_respuesta = (e) => {
    const lista_botones_denunciar_respuesta = document.querySelectorAll('.btn_denunciar_respuesta');

    for(let i = 0; i < lista_botones_denunciar_respuesta.length; i++){
        lista_botones_denunciar_respuesta[i].addEventListener('click', eliminar_respuesta_insertada);
    }
};


const eliminar_respuesta_insertada = (e) => {
    e.preventDefault();
    


    // Pregunta para eliminacion
    swal({
        title: "Denunciar respuesta",
        text: "Esta respuesta se eliminara permanentemente del foro.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        buttons: ["Cancelar", 'Denunciar']

    }).then((delete_question) => {
        if (delete_question) {
            swal("Pregunta denunciada satisfactoriamente", {icon: "success"});

            // Proceso de eliminacion
            const elemento_seleccionado = e.target;
            const padre_seleccionado = e.target.parentNode.parentNode;
            padre_seleccionado.remove();
        } else {
            swal("Denuncia cancelada satisfactoriamente");
        }
    });

}


const remover_accion_respuesta = (e) => {
    e.preventDefault();

    const botoneras = document.querySelectorAll('.botones_preguntas');
    
    for(let i = 0; i < botoneras.length; i++){
        botoneras[i].style.display = 'flex';
    }

    const tarjetas_respuestas = document.querySelectorAll('.content_question.response');

    for(let i = 0; i < tarjetas_respuestas.length; i++){
        tarjetas_respuestas[i].remove();
    }
};







const eliminar_coment = (e) => {
    e.preventDefault();


    // Pregunta para eliminacion
    swal({
        title: "Denunciar pregunta",
        text: "Esta pregunta se eliminara permanentemente del foro.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        buttons: ["Cancelar", 'Denunciar']

    }).then((delete_question) => {
        if (delete_question) {
            swal("Pregunta denunciada satisfactoriamente", {icon: "success"});

            // Proceso de eliminacion
            const elemento_eliminar = e.target;
            const pregunta_eliminar = elemento_eliminar.parentNode.parentNode;
            pregunta_eliminar.remove();
        } else {
            swal("Denuncia cancelada satisfactoriamente");
        }
    });
}



const validar_cantidad_caracteres = () => {
    let num_caracter = campor_texto_formulario_foto.value;

    if(num_caracter.length > 501){
        campor_texto_formulario_foto.value = num_caracter.substr(0, 500);
        caracteres.innerHTML = 500;
    }else{
        caracteres.innerHTML = num_caracter.length;
    }
}




boton_formulario_foro.addEventListener('click', enviar_comentario);
campor_texto_formulario_foto.addEventListener('input', validar_cantidad_caracteres);