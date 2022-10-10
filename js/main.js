var btnconsultar = document.getElementById("consultar");
var imgcambio = document.getElementById("imgcambio");





btnconsultar.onclick = function ola() {
    var i = document.getElementById("numero").value;


    var datos = [
        { cedula: '1128437044', estado: 1 },
        { cedula: '1017255391', estado: 2 },
        { cedula: '21667480', estado: 3 },
        { cedula: '1', estado: 1},
        { cedula: '2', estado: 2},
        { cedula: '3', estado: 3},
        { cedula: '4', estado: 4},
        { cedula: '5', estado: 5 },
        { cedula: '6', estado: 6 },
        { cedula: '7', estado: 7 },
        { cedula: '8', estado: 8 },
        { cedula: '9', estado: 9 }


    ]


    var estadofinal = 0;
    console.log(typeof i);
    console.log(i);
    console.log(typeof datos[1].cedula);
    console.log(datos[1].cedula);

    for (var x = 0; x < 12; x++) {

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
        case 8:
            imgcambio.src = "./img/estados/8.jpg";
            break;
        case 9:
            imgcambio.src = "./img/estados/9.jpg";
            break;

        default:
            imgcambio.src = "./img/estados/default.jpg";


    }






}



