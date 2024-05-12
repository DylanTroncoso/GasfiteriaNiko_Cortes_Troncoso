function mostrarPass1() {
    let pass = document.getElementById('pass1');
    let boton = document.getElementById('boton1');
    if (pass.type == 'text') {
      pass.type = 'password';
      boton.value = 'Mostrar Contraseña';
    }
    else {
      pass.type = 'text';
      boton.value = 'Ocultar Contraseña';
    }
  }

function mostrarPass2() {
    let pass = document.getElementById('pass2');
    let boton = document.getElementById('boton2');
    if (pass.type == 'text') {
      pass.type = 'password'
      boton.value = 'Mostrar Contraseña';
    }
    else {
      pass.type = 'text'
      boton.value = 'Ocultar Contraseña';
    }
  }

$(function(){
    $("#mis-datos").validate({
        rules:{
            nom:{
                required: true
            },
            apellido:{
                required: true
            },
            email:{
                required: true
            },
            fono:{
                required: true,
                number: true
            },
            fecha:{
                required: true
            },
            pass1:{
                required: true
            },
            pass2:{
                required: true,
                equalTo: '#pass1'
            },
        },
        messages:{
            nom:{
                required:'Ingrese su nombre..',
                minlength:'Caracteres insuficientes'
            },
            apellido:{
                required:'Ingrese su apellido..',
                minlength:'Caracteres insuficientes'
            },
            email:{
                required:'Ingrese su correo..',
                email:'Formato de correo no valido'
            },
            fono:{
                required:'Ingrese su telefono..',
                minlength:'Digitos insuficientes'
            },
            fecha:{
                required:'Seleccione su fecha de nacimiento..',
                min:'Ingrese una fecha válida'
            },
            pass1:{ 
                required:'Ingrese una contraseña..',
                minlength:'Caracteres insuficientes, minimo 8..'
            },
            pass2:{
                required:'Reingrese su contraseña..',
                minlength:'Caracteres insuficientes, minimo 8..',
                equalTo:'Contraseñas no coinciden'
            }

        }
    })
})