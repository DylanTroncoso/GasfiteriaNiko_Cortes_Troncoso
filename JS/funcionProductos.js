//implementar función utilizando FETCH que permita mostrar la información de las mascotas
function mostrarProductos(){
    let url='http://localhost:3000/productos';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarProductos(data))
    .catch(error => console.log(error))

    const mostrarProductos=(data)=>{
        console.log(data);
        let texto=""
        for(i=0; i<data.length; i++)
        {
            texto+=`<tr>
                 <td>${data[i].id}</td>
                 <td>${data[i].nombre}</td>
                 <td>${data[i].precio}</td>
                 <td>${data[i].desc}</td>
                 </tr>`
        }//for
        document.getElementById('productos').innerHTML=texto;
    }

}