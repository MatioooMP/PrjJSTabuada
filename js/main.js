const botaoDisparaTabuadaConsole = document.querySelector
    ('.btn-console');
const botaoDisparaTabuadaDOM = document.querySelector
    ('.btn-DOM');
const caixaEntradaTabuada = document.querySelector
    ('#tabuada-number');

botaoDisparaTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector
        ('#tabuada-number').value);
        mostrarTabuadaNoConsole(entradaUsuario);
});
botaoDisparaTabuadaDOM.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector
        ('#tabuada-number').value);
    mostrarTabuadaNoDOM(entradaUsuario);
});

//mostrar a tabuada quando o evento clicar no Enter acontecer

// caixaEntradaTabuada.addEventListener('keyup', (e)=> {
//     if (e.key === 'Enter') {
//         validarEntrada(caixaEntradaTabuada.value);
//         mostrarTabuadaNoConsole(caixaEntradaTabuada.value);
//         mostrarTabuadaNoDOM(caixaEntradaTabuada.value);
//     }
// });

caixaEntradaTabuada.addEventListener('keyup',verificarTecla);

function verificarTecla(e){
    if (e.key === 'Enter') {
        validarEntrada(this.value);
        mostrarTabuadaNoDOM(this.value);
        mostrarTabuadaNoConsole(this.value);
    }
}

function validarEntrada(numero){
    if(isNaN(numero)){
        return "Número inválido! Digite um número válido";
    }
}

function mostrarTabuadaNoConsole(numero) {

    if (validarEntrada(numero) == null) {

        console.log(`Mostrando a tabuada ${numero}`);
        let contador = 0
        while (contador <= 10) {
            console.log(`${numero} X ${contador} = ${numero * contador}`);
            contador++;
        }
        return
    }
    console.log(validarEntrada(numero));
}

function mostrarTabuadaNoDOM(numero){

    const ulTabuada= document.querySelector('.tabuada');
    ulTabuada.innerHTML = "";
    const tituloTabuada = document.querySelector('.titulo-tabuada');
    
    if (validarEntrada(numero) == null) {
        tituloTabuada.innerHTML = `Mostrando a tabuada do ${numero}`;
        let contador = 0;
    while (contador <= 10){
        const linhaTabuada = document.createElement('li');
        linhaTabuada.innerHTML = `${numero} X ${contador} = ${numero * contador}`;
        contador++;
        linhaTabuada.classList.add('linha-tabuada');
        ulTabuada.appendChild(linhaTabuada);
    }
    return
}
tituloTabuada.innerHTML = validarEntrada(numero);    
    

}





