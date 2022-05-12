// console.log("MSG GERADA NO ARQ EXTERNO Olá Mundo!")

// // Declaração de variáveis em Javascript

// //Utilizando var
// //O var é utilizando quando queremos uma variável de escopo global.
// var nome = "Alê"
// //Utilizando o simbolo ( + )
// console.log("Meu nome é : " + nome)

// //Utilizando let
// //O let é utilizando quando queremos uma variável de escopo local.

// function exemploEscopo(){
//     let sobrenome = "Carlos"
//     return sobrenome
// }
// console.log("Nome completo : " + nome + " " + exemploEscopo())

// //Utilizando const
// //O const é utilizado para declarar constantes
// //Sempre criamos elementos com const
// //Ex: Utilizando a interface document do DOM + uma função(com um parâmetro String entre aspas) podemos
// //recuperar qualquer elemento que esteja em nosso documento html.
// // Utilizando a função querySelector para recuperar elementos com seletores CSS.

// //Utilizando um seletor ID
// //const logoTitulo = document.querySelector("#tit-logo")

// //Utilizando um seletor tag para pegar todos os elementos
// //Utilizamos a função querySelectorAll( nome do seletor)
// //Ele retorna uma lista deste seletor
// const elementosLinks = document.querySelectorAll("a")

// //Alterando o conteúdo do elemento
// elementosLinks[1].target = "TESTE"
// elementosLinks[1].innerHTML = "TESTE"

// //Imprimindo o conteúdo do elemento selecionado
// // console.log("Conteúdo do elemento selecionado : " + elementosLinks[1].innerHTML)

// // //Adicionando estilo a um elemento li dentro da lista com querySelector
// // const elementosLista = document.querySelector("nav ul li a[href='#imagens']")
// // elementosLista.style.backgroundColor = "red"

// //Loop For iterando sobre os elementos da lista
// for(let i = 0; i < elementosLinks.length; i++){
//     console.log("Conteúdo do elemento selecionado : " + elementosLinks[i].innerHTML)
// }

// //Separação de linhas
// console.log("\n")

// //Loop for OF iterando sobre os elementos da lista
// //O for of é um loop que itera sobre os elementos de uma lista e retorna o valor de cada elemento
// for(let elemento of elementosLinks){
//     console.log("Aqui é o innertHTML : " + elemento.innerHTML)
//     console.log("Aqui é o HREF : " + elemento.href)
// }

// //Separação de linhas
// console.log("\n")

// //Loop for in iterando sobre os elementos da lista
// //O for in retorna o índice do elemento
// for(let elemento in elementosLinks){
//     console.log("Aqui é o innertHTML : " + elementosLinks[elemento].innerHTML)
//     console.log("Aqui é o HREF : " + elementosLinks[elemento].href)
// }

//Exercício da Lâmpada
//Crie um programa que simule a luz de uma lâmpada.
/*
    1. Crie 2 botões, um para ligar e outro para desligar a lâmpada.
    2. Crie uma div e adicione um elemento img com o id "img-lampada"
    3. Crie um evento para o botão ligar, que adicione o atributo src da imagem com o valor "img/lampada-acesa.png"
    4. Crie um evento para o botão desligar, que adicione o atributo src da imagem com o valor "img/lampada-apagada.png"
*/
