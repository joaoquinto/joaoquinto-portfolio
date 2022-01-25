const buttonMenu = document.querySelector('#menu-hamburguer')
const menuHamburguerItem = document.querySelector('.menu-hamburguer-item')
export default function menuHamburguer() {
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