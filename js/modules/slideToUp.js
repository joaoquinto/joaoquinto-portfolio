export default function SlideToUp(){
  const topo = document.querySelector('body')
  const buttoToTop = document.querySelector('.slideToUp')
  topo.scrollIntoView({
    behavior:'smooth'
  })
  buttoToTop.addEventListener('click',SlideToUp)
}