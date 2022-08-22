let cartas = ["./imagens/unicornparrot.gif", "./imagens/unicornparrot.gif",
                "./imagens/bobrossparrot.gif", "./imagens/bobrossparrot.gif",
                "./imagens/explodyparrot.gif", "./imagens/explodyparrot.gif", 
                "./imagens/fiestaparrot.gif", "./imagens/fiestaparrot.gif", 
                "./imagens/metalparrot.gif", "./imagens/metalparrot.gif", 
                "./imagens/revertitparrot.gif", "./imagens/revertitparrot.gif", 
                "./imagens/tripletsparrot.gif", "./imagens/tripletsparrot.gif"];

let qtdeCartas = prompt("Com quantas cartas quer jogar? Escolha um número par entre 4 e 14.");
const jogo = document.querySelector('.jogo');
while (qtdeCartas%2 != 0 || qtdeCartas<4 || qtdeCartas>14) {
    alert("Não é possível iniciar a partida. Escolha um número par entre 4 e 14.");
    qtdeCartas = prompt("Com quantas cartas quer jogar?");
                
}
            
let carta_jogo = cartas.slice(0,parseInt(qtdeCartas));
console.log(carta_jogo)
carta_jogo.sort(comparador);

function comparador(){
    return Math.random() - 0.5;
}

for (let contador = 0; contador < qtdeCartas; contador++) {
    jogo.innerHTML += `<button onclick="virarCarta(this)" class="carta">
                    <img class="face front" src="./imagens/front.png" />
                    <img class="face back" src=${carta_jogo[contador]} />
                    </button>`;
}

let contador2 = 0;
let x,y;
let carta1,carta2;
function virarCarta(carta) {
    if (carta.classList.contains('virada') === false) {
        carta.classList.add('virada');
        console.log(carta.classList)
        contador2++;
        console.log(contador2);
        if (contador2%2 !== 0) {
            carta1 = carta
            x = carta.children[1].getAttribute('src');
        }
                    
        if (contador2%2 === 0) {
            carta2 = carta
            y = carta.children[1].getAttribute('src');
            // console.log(x);
                        
            if (x !== y) {
                // setTimeout(1000);
                carta1.classList.remove('virada');
                carta2.classList.remove('virada');
        
            }
            let viradas = document.querySelectorAll('.virada');
            console.log(viradas)
            if (viradas.length === parseInt(qtdeCartas)) {
                alert(`Você ganhou em ${contador2} jogadas!`)
            }            
        }                   
    }
}