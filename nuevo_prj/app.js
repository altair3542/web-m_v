// console.log('JS cargado correctamente en Cafeteria Motitas')

// alert('Bienvenido a cafetieria motitas (soy nuevo, no me echen, por favor.)')


// seleccionar el elemento en el DOM
const tituloPrincipal = document.querySelector('#titulo-principal')


// lo muestro por conosola

console.log('titulo principal:', tituloPrincipal)


// cambio el texto dentro del selector, sin cambiar directamente el HTML

tituloPrincipal.textContent = 'Cafeteria Motitas - Cafe y gatos felices'


// MODO NOCHE.

// 1. Seleccionamos el boton y el body

const botonModoNoche = document.querySelector('#btn-modo-noche')
const body = document.body

// 2. agregamos el evento.
botonModoNoche.addEventListener('click', function () {
  // alternar la clase 'modo-noche' en el body
  body.classList.toggle('modo-noche')

  // actualizar el texto del boton segun el estado.
  if (body.classList.contains('modo-noche')) {
    botonModoNoche.textContent = 'Desactivar el modo noche'
  } else {
    botonModoNoche.textContent = 'Activar modo noche'
  }
})
