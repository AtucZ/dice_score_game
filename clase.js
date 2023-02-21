//Establece variables a usar
//*limite: asignar un máximo de tiros ---- Cambiar de acuerdo a la preferencia
//*contador: contar los tiros
var limite=6 //Editar el máximo de tiros permitidos
var contador=0

function lanzar_dado(){

    //Si el contador de tiros pasa el limite, caso contrario
    if(contador>=limite){
        //Abre ventana modal para informar del limite alcanzado y si desea reiniciar o no
        //Si se le da confirmar realiza el reinicio
        if (window.confirm("Se ha alcanzado el límite de lanzamientos\nDesea reiniciar?")) {
            reiniciar()
        }

    }else{
        //Genera un valor aleatorio entre 1 y 6
        valor=Math.ceil(Math.random()*6)

        //Actualiza el objeto img de id="dado" con la ruta
        //de la imagen de acuerdo al valor 
        //ejm: "recursos/6.png"
        document.getElementById('dado').src="recursos/"+valor+".png"
        
        //Actualiza el contador en +1
        contador++

        //Calcula el progreso de los intentos
        progreso=(100/limite)*contador/100

        //Llama al componente y asigna el atributo values=progreso
        var barra=document.getElementById("barra_progreso")
        barra.setAttribute("value",progreso)

        //Se crea una celda
        var celda_num=document.createElement("td")
        //Se crea el texto de la celda del contador
        var texto=document.createTextNode(contador)
        //Se asigna el texto a la celda
        celda_num.appendChild(texto)

        //Se crea una celda
        var celda_puntaje=document.createElement("td")
        //Se crea el texto de la celda del puntaje
        texto=document.createTextNode(valor)
        //Se asigna el texto a la celda
        celda_puntaje.appendChild(texto)

        //Se crea una fila
        var fila=document.createElement("tr")
        //Se asignan las celdas creadas a la fila
        fila.appendChild(celda_num)
        fila.appendChild(celda_puntaje)

        //Se llama al cuerpo de la tabla
        tabla=document.getElementById('cuerpo_tabla')
        //Se asigna la fila creada con los datos hacia la tabla del archivo html
        tabla.appendChild(fila)
    }    
}

//Limpia el puntaje y lanzamiento
function reiniciar(){
    // Reinicia el contador en 0
    contador=0
    // Cambia la imagen del dado inicial
    document.getElementById('dado').src="recursos/1.png"
    // Remueve el puntaje generado
    removerPuntaje()
    // Asigna el valor a la barra de progreso en 0
    document.getElementById("barra_progreso").setAttribute("value",0)
}

//Recarga la pagina actual
function recargar(){
    location.reload()
}

//Remueve el puntaje generado en la tabla
function removerPuntaje(){
    //Llama el cuerpo de la tabla html
    elemento= document.getElementById("cuerpo_tabla")
    //Mientras tenga filas de puntaje
    while(elemento.firstChild){
        //Borra la primera fila
        elemento.removeChild(elemento.firstChild)
    }
}