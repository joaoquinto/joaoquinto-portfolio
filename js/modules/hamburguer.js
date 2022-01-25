const buttonMenu = document.querySelector('#menu-hamburguer')
const menuHamburguerItem = document.querySelector('.menu-hamburguer-item')
export default function menuHamburguer() {
const validator = menuHamburguerItem.classList.contains('ativo')


if (validator != true) {
  menuHamburguerItem.classList.add('ativo')
  buttonMenu.ariaExpanded = 'true'
} else {
  menuHamburguerItem.classList.remove('ativo')
  buttonMenu.ariaExpanded = 'false'
}

}

buttonMenu.addEventListener('click',menuHamburguer)