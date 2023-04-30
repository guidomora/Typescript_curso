// never significa que la funcion no debe resultar exitosa
// En el ejemploo nunca regresa nada (tira el error) o regresa un numero
// 
// 
// 


(() => {
const error = (message:string):(never | number) => {
    if (false) {
        throw new Error(message);
    }
    return 1
    
}
error("hay error")

})()