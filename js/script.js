console.log("MSG GERADA NO ARQ EXTERNO Olá Mundo!")

var nome = "Alê"

console.log("Meu nome é: " + nome)

function exemploEscopo(){
    let sobrenome = "Carlos"
    return sobrenome

}
console.log("Nome completo: " + nome + "" + exemploEscopo())

const logoTitulo = document.querySelector("#tit-logo")