// Typescript: es un super set de Javascript. Transpila el codigo, osea lo traduce de 
// una forma. 
// 	- Typescript es transpilado a javascript para que sea soportado por el navegador
// 	- Permite escribir Javascript moderno que va a ser soportado por todos los navegadores
// 
// En la terminal integrada de vs ejecutamos: tsc
// esto hace que se transpile el archivo de TS y cree uno de JS 
// 
// En la terminal de windows sobre la carpeta de proyecto (Bases Typescript)\
// ejecutamops tsc --init esto crea un archivo json de configuracion de TS
// 
// Modo observador: hace la compilacion automaticamente   tsc --watch o tamb tsc -w
// 
// 
// TIPOS DE DATOS: 
// - any: aparece cuando no esta especificado el tipo de dato. any =  cualquier cosa
// 
// 
// Este tipo de funciones son las anonimas autoinvocadas para que el codigo
// no choque con los demas archivos js. Los parentesis del final son para
// que se ejecute sola

(() => {
    const a: number = 10
    console.log(a)
})()



