const button_login = document.querySelector('.formulario__login button');
const button_register = document.querySelector('.formulario__register button');
const entry_login = document.querySelectorAll('.formulario__login input');
const entry_register = document.querySelectorAll('.formulario__register input');


let datos_con_los_que_validar = {
    'usuario' : '', 
    'password' : ''
};



const validar_login = (e) => {
    e.preventDefault();

    user = entry_login[0].value;
    password = entry_login[1].value;

    if(datos_con_los_que_validar['usuario'] === '' && datos_con_los_que_validar['password'] === ''){
        swal("Falta cuenta", "Primero debes crear una cuenta", "error");
    }else{
        if(user === datos_con_los_que_validar['usuario'] && password === datos_con_los_que_validar['password']){
            swal("Inicio de sesión correcto", "Has ingresado los datos correctamente", "success");
        }else{
            swal("Error de inicio de sesión", "Error a la hora de ingresar los datos", "success");
            window.location.href = 'http://127.0.0.1:5500/index.html';
        }
    }
};


const crear_cuenta = (e) => {
    e.preventDefault();

    let nuevo_usuario = entry_register[1].value;
    let nueva_password = entry_register[3].value;

    datos_con_los_que_validar['usuario'] = nuevo_usuario;
    datos_con_los_que_validar['password'] = nueva_password;

    swal("Creacion de usuario", "Usuario creado correctamente", "success");
};

button_login.addEventListener('click', validar_login);
button_register.addEventListener('click', crear_cuenta);