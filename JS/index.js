//alert("hola mundo")

//funcion de saludar

/*const saludar = () => {
    return "Hola!"
}

const resultado = saludar()
 console.log(resultado)
 alert(resultado)*/


 //MÉTODO DE ARREGLO

 //1. REDUCE
 const numeros = [2,3,5,9]

 /*const sumarNumeros = numeros.reduce((acumulador, valorActual) => {
    console.log("acumulador", acumulador)
    console.log("valor inicial", valorActual)
    return acumulador + valorActual
 },10)// como argumento se pasa una funcion con 2 parametros 
 console.log(sumarNumeros)*/


 const multiNumeros = numeros.reduce((multiplicando, multiplicador) =>{
    console.log("multiplicando", multiplicando)
    console.log("multiplicador", multiplicador)
    console.log("el resultado es : ", multiplicando * multiplicador)
    console.log("-------")

    return multiplicando * multiplicador
 },1)

 console.log(multiNumeros)

// este es otro
 const ventas = [100,300,500,8000,1560]
 const totalVentas = ventas.reduce((acumulador, valorActual)=>{
    return acumulador +valorActual
 },0)
 console.log("total de ventas", totalVentas)

 /**   ******************************************************************************************** */
 // 2. MAP
 /** Recorre todos los elementos del arreglo y los cambia generando un nuevo arreglo
  * siempre debes generar una nueva variable si estas mutando algo
  */

/*const paises =[
    "México",
    "Colombia",
    "Perú",
    "Argentina",
    "Brasil",
    "Chile",
    "EEUU"
]

const formatoPaises = paises.map((pais) =>{
        return `El país es: ${pais}`
})
console.log("formatoPaises", formatoPaises)*/


/**Ejercicio MAP 
 * genera un arreglo de números multiplique por 3 cada elemento del arreglo
 * [1,2,3]
 * [3,6,9]
 */

const numeros1 = [1,2,3]

const multiNumeros1  = numeros1.map((num) =>{
    return num*3
})

console.log(multiNumeros1)


//Ejercicio de practicidad empresarial

const empleados =[
    {
        nombre: "viry", salario :3000
    },
    {
        nombre:"ramiro", salario: 5000
    },
    {
        nombre: "leo", salario: 8000
    }
]


const evalucion = empleados.map(empleado => {
    let resultado = `El salario de ${empleado.nombre} es  un salario promedio dentro del rango de la empresa`
    
    if(empleado.salario >7000){
        resultado =`El salario de ${empleado.nombre} es considerado un salario altom dentro del rango de la empresa`
    }
    return resultado
})

console.log("evaluacion", evalucion)

/**   ******************************************************************************************** */
//3. 