const buttonMenu = document.querySelector('#menu-hamburguer')
const menuHamburguerItem = document.querySelector('.menu-hamburguer-item')

export  function menuHamburguer() {
const validator = menuHamburguerItem.classList.contains('ativo')
  if (validator != true) {
    menuHamburguerItem.classList.add('ativo')
    menuHamburguerItem.ariaExpanded = 'true'
  } else {
    menuHamburguerItem.classList.remove('ativo')
    menuHamburguerItem.ariaExpanded = 'false'
  }
}

buttonMenu.addEventListener('click',menuHamburguer)

export function acessibilidade(){
  if (document.body.clientWidth < 1000) {
    menuHamburguerItem.ariaOrientation = 'vertical'
    menuHamburguerItem.ariaExpanded = 'true'
    buttonMenu.ariaHidden = 'false'
  }else{
    menuHamburguerItem.ariaOrientation = 'horizontal'
    menuHamburguerItem.ariaExpanded = 'true'
    buttonMenu.ariaHidden = 'true'
  }
}

window.onresize = acessibilidade

