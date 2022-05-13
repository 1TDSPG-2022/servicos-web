

//Selecionar o elemento HTML
//document.querySelector("div")

//Funções matemáticas Math
//console.log(Math.pow(10,3))

//TERNÁRIO

//var nomes=['Julia','Tulio','Antonio','Theo']
//console.log(nomes[(Math.round(Math.random()*3))])

function mudaCor(){
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)

    document.querySelector("div").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"

}

//setTimeout(mudaCor,1000)
//setInterval(mudaCor,3000)

//wimdow.addventListener("load", mudaCor)