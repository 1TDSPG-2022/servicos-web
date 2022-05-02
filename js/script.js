console.log("MSG GERADA NO ARQ EXTERNO Olá Mundo!")

// Declaração de variáveis em Javascript

//Utilizando var
//O var é utilizando quando queremos uma variável de escopo global.
var nome = "Alê"
//Utilizando o simbolo ( + )
console.log("Meu nome é : " + nome)

//Utilizando let
//O let é utilizando quando queremos uma variável de escopo local.

function exemploEscopo(){
    let sobrenome = "Carlos"
    return sobrenome        
}
console.log("Nome completo : " + nome + " " + exemploEscopo())

//Utilizando const
//O const é utilizado para declarar constantes
//Sempre criamos elementos com const
//Ex: Utilizando a interface document do DOM + uma função(com um parâmetro String entre aspas) podemos
//recuperar qualquer elemento que esteja em nosso documento html.
// Utilizando a função querySelector para recuperar elementos com seletores CSS.

//Utilizando um seletor ID
//const logoTitulo = document.querySelector("#tit-logo")

//Utilizando um seletor tag para pegar todos os elementos
//Utilizamos a função querySelectorAll( nome do seletor)
//Ele retorna uma lista deste seletor
const elementosLinks = document.querySelectorAll("a")

//Alterando o conteúdo do elemento
elementosLinks[1].innerHTML = "TESTE"

//Imprimindo o conteúdo do elemento selecionado
console.log("Conteúdo do elemento selecionado : " + elementosLinks[1].innerHTML)