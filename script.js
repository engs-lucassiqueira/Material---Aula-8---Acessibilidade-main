 // Funções de acessibilidade
let tamanhoFonte = 100;
let tamanhoMain = 800;
let main = document.querySelector("#conteudo-principal");

function aumentarFonte() {

        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        tamanhoMain += 50;
        main.style.maxWidth = tamanhoMain + "px";

}

function diminuirFonte() {
    
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        if(tamanhoMain > 800){
            tamanhoMain -= 50;
            main.style.maxWidth = tamanhoMain + "px";
        }
        
    
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");

    const botaoContraste = document.querySelector("#botao-contraste");
    const contrasteAtivo = document.body.classList.contains("alto-contraste");
    botaoContraste.setAttribute("aria-pressed", contrasteAtivo);
}

