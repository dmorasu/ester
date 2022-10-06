var btnconsultar = document.getElementById("consultar");
var imgcambio = document.getElementById("imgcambio");





btnconsultar.onclick = function ola() {
    var i = document.getElementById("numero").value;


    var datos = [
        { cedula: '1128437044', estado: 1 },
        { cedula: '1017255391', estado: 2 },
        { cedula: '21667480', estado: 3 },
        { cedula: '3363715', estado: 4 }
    ]


    var estadofinal = 0;
    console.log(typeof i);
    console.log(i);
    console.log(typeof datos[1].cedula);
    console.log(datos[1].cedula);

    for (var x = 0; x < 4; x++) {

        if(datos[x].cedula==i){
            estadofinal=datos[x].estado;
            
            
           
        }
    }
    console.log(estadofinal);

    switch (estadofinal) {
        case 1:
            imgcambio.src = "./img/estados/1.jpg";
            break;
        case 2:
            imgcambio.src = "./img/estados/2.jpg";
            break;
        case 3:
            imgcambio.src = "./img/estados/3.jpg";
            break;
        case 4:
            imgcambio.src = "./img/estados/4.jpg";
            break;
        case 5:
            imgcambio.src = "./img/estados/5.jpg";
            break;
        case 6:
            imgcambio.src = "./img/estados/6.jpg";
            break;
        case 7:
            imgcambio.src = "./img/estados/7.jpg";
            break;

        default:
            imgcambio.src = "./img/estados/default.jpg";


    }






}



