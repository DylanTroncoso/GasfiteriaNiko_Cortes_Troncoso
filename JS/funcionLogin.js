function mostrarPass() {
    let pass = document.getElementById('pass');
    let boton = document.getElementById('boton');
    if (pass.type == 'text') {
      pass.type = 'password'
      boton.value = 'Mostrar Contraseña'
    }
    else {
      pass.type = 'text'
      boton.value = 'Ocultar Contraseña'
    }
  }

$(function(){
  $("#mis-datos").validate({
      rules:{
          email:{
              required: true
          },
          pass:{
              required: true
          }
      },
      messages:{
          email:{
              required:'Ingrese su correo..',
              email:'Formato de correo no valido'
          },
          pass:{ 
              required:'Ingrese una contraseña..',
              minlength:'Caracteres Insuficientes'
          }

      }
  })
})