//Ajustar tamanho da tela 
let altura = 0
let largura = 0
let vidas = 1
let tempo = 20

let criaInimigoTempo = 1500

let nivel = window.location.search


nivel = nivel.replace('?','')
//alert(nivel)

//niveis de dificuldade
if (nivel === 'aprendiz'){
    //1300
    let criaInimigoTempo = 1300
} else if (nivel === 'guerreiro') {
    //1000
    let criaInimigoTempo = 1000
} else if ( nivel === 'capitao'){
    //700
    let criaInimigoTempo = 700
} else if ( nivel === 'rei'){
    //500
    let criaInimigoTempo = 500
}



function ajustaTelaJogo(){

// encontrar a altura e largura da página 
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura , altura)
}

ajustaTelaJogo()

//criando a função cronometro 
let cronometro = setInterval(function() {
    
    tempo -= 1

    if (tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criaInimigo)
        window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
     
} ,1000 )

function posicaoRandomica(){

    //remover inimigo anterior caso exista
    if (document.getElementById('inimigo')){
        document.getElementById('inimigo').remove()
        
        //console.log(('vida' + vidas))
        if (vidas > 3){
            window.location.href = 'game_over.html'
            
        }else {
            document.getElementById('vida' + vidas).src='imagens/coracao_vazio.png'
            vidas ++
        }    
    }

    // Criar posições randômicas 
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html 
    let inimigo = document.createElement('img')
    inimigo.src = 'imagens/inimigo.png'
    inimigo.className = (tamanhoAleatorio() + ' ' +  ladoAleatorio())
    inimigo.style.left = posicaoX + 'px'
    inimigo.style.top = posicaoY + 'px'
    inimigo.style.position = 'absolute'
    inimigo.id = 'inimigo'
    inimigo.onclick = function(){
        this.remove()
    }

    document.body.appendChild(inimigo)
    console.log(ladoAleatorio())
 
}

//criar tamanhos diferentes de inimigo 
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch (classe){
        case 0: 
            return 'inimigo1'
        case 1: 
            return 'inimigo2'
        case 2:
            return 'inimigo3'
    }
}

// lado aleatório 
function ladoAleatorio() {
    let lado = Math.floor(Math.random() * 2)
    console.log(lado)

    switch (lado){
        case 0: 
            return 'ladoA'
        case 1: 
            return 'ladoB'
       
    }
}

