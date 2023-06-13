function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio)
  if (elemento && elemento.localName === 'audio') elemento.play()
  else console.log('Elemento não encontrado ou seletor inválido')
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom

const listaDeTeclas = document.querySelectorAll('.tecla')

for (cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`

  setTimeout(function(){
    tecla.onclick = function () {
      tocaSom(idAudio)
    }
  }, 5000); 


  tecla.onkeydown = function (evento) {
    console.log(evento.code)
    if (evento.code == 'Space' || evento.code == 'Enter')
      tecla.classList.add('ativa')
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
