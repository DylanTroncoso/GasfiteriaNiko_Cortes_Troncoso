function mostrarPersonal(){
    let url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarPersonal(data))
    .catch(error => console.log(error))

    const mostrarPersonal=(data)=>{
        console.log(data);
        let texto=""
        for(i=0; i<data.length; i++)
        {
            texto+=`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].address.city}</td>
                </tr>`
        }
        document.getElementById('users').innerHTML=texto;
    }

}

function buscarTipo(){
    let url='https://jsonplaceholder.typicode.com/users';
    fetch (url)
    .then(response=>response.json())
    .then(data => buscarCargo(data))
    .catch(error => console.log(error))

    const buscarCargo=(data)=>{
        console.log(data);
        let texto="";
        let tipo=document.getElementById('cargo').value;

        if (document.getElementById('cargo').selectedIndex==0){
            mostrarPersonal();

        }else{
            for(i=0; i<data.length; i++)
                {
                    if (tipo==data[i].id){
                        texto+=`<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].phone}</td>
                        <td>${data[i].address.city}</td>
                        </tr>`
                    }
                }
                document.getElementById('users').innerHTML=texto;
        }
        
    }

}