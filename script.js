let perros = [
    {
        id:1,
        raza:"Bulldog",
        tamañoGrande:false,
        Precio:{contado:80,tarjeta:120,recargo:270}
    },
    {
        id:2,
        raza:"Labrador",
        tamañoGrande:true,
        Precio:{contado:100,tarjeta:170,recargo:310}
    },
    {
        id:3,
        raza:"Pastor Aleman",
        tamañoGrande:true,
        Precio:{contado:90,tarjeta:190,recargo:240}
    },
    {
        id:4,
        raza:"Chihuahua",
        tamañoGrande:false,
        Precio:{contado:60,tarjeta:130,recargo:180}
    }
]
// 1.	Retorne los perros que tienen un precio con tarjeta mayor o igual a 125 
let precios = perros.filter((a) =>{
    if (a.Precio.tarjeta >= 125){
     return a.raza
    }
})
console.log("**************RESPUESTA 1**************")
console.log(precios)

// 2.	Retorne los perros que coincidan con una raza dado (el nombre puede estar incompleto)

let perrosrazas = (buscar) =>{
    return perros.filter((e) =>(e.raza.indexOf(buscar) != -1))
}
console.log("**************RESPUESTA 2**************")
console.log(perrosrazas("hua"))


// 3.	Ordene los perros de acuerdo al recargo que tienen 
perros.sort((a,b)=>a.Precio.recargo-b.Precio.recargo)
console.log("**************RESPUESTA 3**************")
console.log(perros)

// 4.	Reciba un array de IDs y retorne un array con perros de dichas Ids`

console.log("**************RESPUESTA 4**************")
let arrayId = [1,3];
for (let i=0; i<arrayId.length; i++){
perros.filter((a) =>{
    if (a.id == arrayId[i]){
        console.log(a)
    }
})
}

// 5.	Retorne un nuevo objeto, agrupado por perros grandes y otros

let perrosTipos = ()=>{
    return perros.reduce((nuevoObjeto,perro) => {
    if (perro.tamañoGrande){
    nuevoObjeto.tamañoGrande.push(perro)
    }
    else{
        nuevoObjeto.otros.push(perro)
    }
    return nuevoObjeto;
    } , {tamañoGrande:[], otros:[]})
}
console.log("**************RESPUESTA 5**************")
console.log(perrosTipos())