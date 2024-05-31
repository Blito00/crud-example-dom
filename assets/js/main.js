let tareas = ["tarea 1", "tarea 2"];
let contenido = document.getElementById("contenido");

const crearTarea = ()=> {
    let nombre = document.getElementById("nombre").value

    tareas.push(nombre);

    pintarTareas(tareas)
}


const editarTarea = (tarea)=>{
    const nuevoNombre = prompt("ingresar un nuevo nombre");

    const indice = tareas.indexOf(tarea);
    tareas.splice(indice, 1, nuevoNombre);

    pintarTareas(tareas);
}

const pintarTareas = (tareas) => {
    contenido.innerHTML = ""
    
    tareas.forEach( tarea => {

        console.log(tarea)
        contenido.innerHTML+= `<div>${tarea} <button type="button" 
        onclick="editarTarea('${tarea}')">Editar</button></div>`
    } )
}

pintarTareas(tareas);