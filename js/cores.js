//Selecionar o elemento HTML


//Funções matemáticas Math
//console.log(Math.pow(10,3))

//TERNÁRIO
//let indice = (Math.round(Math.random(*3) - 1)>= 0 ? (Math.round(Math.random())*3 - 1)

//var nomes = ['Julia','Túlio','Antonio','Théo']
//console.log(nomes[Math.round(Math.random()*3)])
function mudaCor(){
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    
    document.querySelector("div").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
    document.querySelector("div").style.backgroundColor = `rgb(${r}, ${g}, ${b})`

}

//setTimeout(mudaCor,3000)
setInterval(mudaCor, 3000)

//window.addEventListener("load", mudaCor)