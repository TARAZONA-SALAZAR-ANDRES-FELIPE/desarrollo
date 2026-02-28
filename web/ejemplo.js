/*console.log("hola mundo")

function saludo() {
    console.log("hola como estas ?")
}

saludo()

const saludoDos = function (){
    console.log("saludo dos")
}

saludoDos()

const saludoTres = () => {
    console.log("saludo tres")
}

saludoTres()

/*const bienvenida = (nombre , apellido = 'sin apellido') => {
    return `Bienvenido  ${nombre} ${apellido}`
}

let temporal = bienvenida('Andres' , 'Tarazona')
let temporal2 = bienvenida('Felipe')

console.log(temporal)
console.log(temporal2)

const bienvenida = (nombre, apellidoUno, apellidoDos) =>{
if (apellidoDos == undefined) {
    return `No se puede dar la bienvenida`
} 
return `Bienvenido ${nombre} ${apellidoUno} ${apellidoDos}`

}

let saludo1 = bienvenida('Andres', 'Tarazona', 'Salazar')
let saludo2 = bienvenida('Andres', 'Tarazona')

console.log(saludo1)
console.log(saludo2)

const suma = (numero1 , numero2, numero3 = 5) =>{
    return numero1 + numero2 + numero3
}

console.log(suma(1, 5, 6))
console.log(suma(1, 4))*/


/*const sumar1 = (a, b, c) =>{
return [a,b,c,a+b+c]
}

console.log( sumar1(1,2,3) )*/

/*const cosa = (a, b) =>{
    let map = {a, b, 'suma': a+b}
    return map
} 

let res =cosa(10,5)
console.log("multiplicacion =" + res.a * res.suma)

const multiplicar = ({a, b, c=2}) => a * b * c

console.log(multiplicar({a: 10, b: 5}))*/

const persona = (nombre, edad) => (edad >= 18 ? `Bienvenido ${nombre}` : `Lo siento ${nombre} no puedes ingresar`)
console.log(persona('Andres', 17))
console.log(persona('Andres', 18))
