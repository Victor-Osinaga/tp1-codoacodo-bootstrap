let formTickets = document.getElementById('buyTickets')
let total = document.getElementById('total')
let inputCantidad = document.getElementById('inputCantidad')
let inputCategoria = document.getElementById('inputState')

// document.addEventListener('submit', (e)=>{
//     e.preventDefault()
// })

formTickets.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(inputCategoria.value === 'Estudiante'){
        total.innerHTML = 200 * 0.80 * parseInt(inputCantidad.value)
    }else if(inputCategoria.value === 'Trainee'){
        total.innerHTML = 200 * 0.50 * parseInt(inputCantidad.value)
    }else{
        total.innerHTML = 200 * 0.15 * parseInt(inputCantidad.value)
    }
})