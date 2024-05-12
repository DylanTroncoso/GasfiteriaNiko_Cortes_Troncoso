$(function(){
    $("#mis-datos").validate({
        rules:{
            nom:{
                required: true
            },
            email:{
                required: true
            },
            asunto:{
                required: true,
            },
            mensaje:{
                required: true
            }
        },
        messages:{
            nom:{
                required:'Ingrese su nombre..',
                minlength:'Caracteres insuficientes'
            },
            email:{
                required:'Ingrese su correo..',
                email:'Formato de correo no valido'
            },
            asunto:{
                required:'Ingrese un asunto..',
            },
            mensaje:{
                required:'Ingrese el mensaje sobre el problema..',
                minlength:'El mensaje debe tener minimo 15 caracteres ¡Debe ser mas especifico!'
            }

        }
    })
})