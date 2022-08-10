//Ajustar tamanho da tela 
let altura = 0
let largura = 0

function ajustaTelaJogo(){
// encontrar a altura e largura da página 
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura , altura)
}

ajustaTelaJogo()

// Criar posições randômicas 
let posicaoX = Math.floor(Math.random() * largura) - 90
let posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar elemento html 
let inimigo = document.createElement('img')
inimigo.src = 'imagens/inimigo.png'
inimigo.className = 'inimigo1'
inimigo.style.left = posicaoX + 'px'
inimigo.style.top = posicaoY + 'px'
inimigo.style.position = 'absolute'
document.body.appendChild(inimigo)

