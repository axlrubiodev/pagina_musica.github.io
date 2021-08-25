/* ---------------------------- Constantes ---------------------------- */
const nombre_contactanos = document.querySelector('#contactanos_nombre');



/* ---------------------------- Funciones ---------------------------- */
const validar_nombre = (event) => {
    let valor_tecla = event.key;

    if(!isNaN(valor_tecla) && valor_tecla != " "){
        let texto = nombre_contactanos.value.split('');
        texto.pop();

        if(texto.length > 0){
            let palabra = '';

            for(let i = 0; i < texto.length; i++){
                palabra = palabra + texto[i];
            }

            nombre_contactanos.value = palabra;
        }
        
    }
};




/* ----------------------------- Eventos ---------------------------- */
nombre_contactanos.addEventListener('keyup', validar_nombre);