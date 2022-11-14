var lista = window.document.querySelector('img#botaomenu')
var menuclick = window.document.querySelector('div#menu')
var body = window.document.querySelector('boxy#corpo')
function clicar() {
    if (menuclick.style.display == 'none') {
        menuclick.style.display = 'block'
    } else {
        menuclick.style.display = 'none'
    }
}
function monitorar() {
    if(window.innerWidth >= 768) {
        lista.style.display = 'none'
        menuclick.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}
