var itemMenu = document.querySelectorAll(".itens-menu")

//Marca a área do site em que estamos.
function selectLink() {
    itemMenu.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

itemMenu.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Remove ou adiciona a classe expandir ao menu lateral quando o ícone do menu for clicado.
var iconeExp = document.querySelector('#iconeExp')
var sideBar = document.querySelector('.sideBar')

iconeExp.addEventListener('click', function() {
    sideBar.classList.toggle('expandir')
})
