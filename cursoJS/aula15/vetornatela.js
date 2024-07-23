let valores = [8, 1, 7, 4, 9]

console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


/*
for (let cont = 0; cont < valores.length; cont++) {
    console.log(`A posiçao ${cont} tem o valor ${valores[cont]}`)
}
*/


for (let pos in valores) { // para cada posiçao em valores
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`) 
}

