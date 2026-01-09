let nome = "Ada Lovelace"
let experiencia = 11100

if (experiencia <1000){
console.log("O Herói de nome "+ nome +  " está no nível de Ferro.")
}

else if(experiencia >1000 && experiencia <= 2000){
    console.log("O Herói de nome "+ nome +  "está no nível de Bronze.")
}

else if(experiencia >=2000 && experiencia <= 5000){
    console.log("O Herói de nome "+ nome +  " está no nível de Prata.")
}

else if(experiencia >=5000 && experiencia <= 7000){
    console.log("O Herói de nome "+ nome +  " está no nível de Ouro}")
}

else if(experiencia >7000 && experiencia <= 8000){
    console.log("O Herói de nome "+ nome +  " está no nível de Platina.")
}

else if(experiencia >8000 && experiencia <= 9000){
    console.log("O Herói de nome "+ nome +  " está no nível de Ascendente.")
}

else if(experiencia >9000 && experiencia <= 10000){
    console.log("O Herói de nome "+ nome +  " está no nível de Imortal.")
}

else {
    console.log("O Herói de nome "+ nome +  " está no nível de Radiante.")
}