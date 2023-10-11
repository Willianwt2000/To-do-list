const input = document.getElementById('add-homework');
const button = document.querySelector('button');
const listaDeTarea = document.getElementById('list-of-task');

function agregarTarea() {
    if (input.value) {
        //Crear tarea nueva 
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        
        //Texto ingresado por el usuario
        let Texto = document.createElement('p');
        Texto.innerText = input.value;
        tareaNueva.appendChild(Texto);

        //Crear y agragar contenedor de los iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos)

        //iconos
        let completar = document.createElement('i')
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar')
        completar.addEventListener('click',completarTarea)

        let eliminar = document.createElement('i')
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
        eliminar.addEventListener('click', eliminarTarea)

        iconos.append(completar, eliminar)

        //agreagr tarea a la lista de tareas
        listaDeTarea.appendChild(tareaNueva)



    } else {
        alert('Por favor Ingrece una tarea')
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.classList.toggle('completada');
    console.log('completed')
}

//Elimiar tarea
function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.remove()
    console.log('deleted');
}

button.addEventListener('click',agregarTarea)

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
})
