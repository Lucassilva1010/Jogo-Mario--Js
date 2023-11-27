// Isso faz com que pegamos a propriedade do css - Mario, para adicionar uma nova classe a ela;
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

//função de chamada da nova classe com as animaçõe no css, ela é chamada de função anonima
const salto = () => {
    mario.classList.add('salto')
    //para que o boneco volte a saltar, é necessario remover a ação add, como seguinte
    setTimeout(() => {

        mario.classList.remove('salto')

    }, 500);
}

const loop = setInterval(() => {
    // Buscando a posição da esquerda do tubo
    const posicaoTubo = pipe.offsetLeft;

    // Buscando o valor do Buttom do mario
    //Foi rocado o valor de PX por espaço em branco
    //Foi tranformado para Numero usando apenas o +
    const puloMario = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    // Verificnado se aposição chegou ao tamanho definido no css
    if (posicaoTubo <= 120 && puloMario < 80 && posicaoTubo > 0) {
        pipe.style.animation = 'none';
        pipe.style.left = `${posicaoTubo}px`

    }
    console.logo("Finalizou")

}, 10);

//isso executa a função
document.addEventListener('keydown', salto);
