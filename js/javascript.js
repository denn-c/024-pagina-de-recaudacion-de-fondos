const $menu = document.querySelector('.encabezado__menu')
const $navegacion = document.querySelector('.encabezado__navegacion')
const $apoyar = document.querySelector('.activadores__boton')
const $seleccionar = document.querySelectorAll('.seleccionar')
const $radio = document.querySelectorAll('.radio')
const $entrada = document.querySelectorAll('.ediciones__entrada')
const $ediciones = document.querySelectorAll('.borde')
const $continuar = document.querySelectorAll('.edicion__boton')
const $modal = document.querySelector('.modal')
const $agradicimiento = document.querySelector('.agradicimiento')
const $modalCerrar = document.querySelector('.modal__cerrar')
const $agradicimientoCerrar = document.querySelector('.agradecimiento__cerrar')


const acciones = (posicion) => {
    $modal.classList.add('modal--activo')
    $radio[posicion].checked = true
    $entrada[posicion - 1].classList.add('ediciones__entrada--activo')
    $ediciones[posicion].classList.add('ediciones--activo')
    let rect = $ediciones[posicion].getBoundingClientRect();
    window.scroll({
        top: (Math.abs(rect.y) + $ediciones[posicion].scrollHeight),
        left: rect.x,
        behavior: 'smooth'
    });
}

$menu.addEventListener('click', () => $navegacion.classList.toggle('encabezado__navegacion--activo'))
$modalCerrar.addEventListener('click', () => $modal.classList.remove('modal--activo'))

$apoyar.addEventListener('click', () => {
    acciones(2);
})

$seleccionar.forEach(elemento => {
    elemento.addEventListener('click', (e) => {
        if (e.target.id == 'boton__bambu') {
            acciones(1);
        }
        if (e.target.id == 'boton_negra') {
            acciones(2);
        }
    })
});

$radio.forEach((elemento, i) => {
    elemento.addEventListener('input', (e) => {
        $entrada.forEach((entrada, j) => {
            entrada.classList.remove('ediciones__entrada--activo')
            $ediciones[j].classList.remove('ediciones--activo')
        });
        $ediciones[i].classList.add('ediciones--activo')
        $entrada[i - 1].classList.add('ediciones__entrada--activo')
    })
});

$continuar.forEach(elemento => {
    elemento.addEventListener('click', () => {
        $agradicimiento.classList.add('agradicimiento--activo')
        $modal.classList.remove('modal--activo')
    })
});

$agradicimientoCerrar.addEventListener('click', () => $agradicimiento.classList.remove('agradicimiento--activo'))