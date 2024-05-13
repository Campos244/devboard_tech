const textoInteresseME = document.querySelector('#texto-interesse-milenaEmmert')
const iconesME = document.querySelectorAll('.icones')

iconesME.forEach(icone => {
  icone.addEventListener('click', () => {
    //console.log(icone.id)
    if(icone.id === 'musica-milenaEmmert') {
      textoInteresseME.innerHTML = 'Minhas bandas favoritas: Eng. do Hawaii, Rammstein e RHCP!'
    } else if(icone.id === 'animal-milenaEmmert') {
      textoInteresseME.innerHTML = 'Meu bichinho favorito são os coelhinhos!'
    } else if(icone.id === 'jogo-milenaEmmert') {
      textoInteresseME.innerHTML = 'Amo os jogos da Nintendo!'
    } else if(icone.id === 'serie-milenaEmmert') {
      textoInteresseME.innerHTML = 'Minhas séries favoritas: The Office e Breaking Bad'
    } else if(icone.id === 'hobby-milenaEmmert') {
      textoInteresseME.innerHTML = 'Amo observar o céu, principalmente em lugares com pouca luz.'
    }
  })
})