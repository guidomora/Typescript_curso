// void significa que no hay valor de retorno
// Si una funcion no retorna nada es correcto ponerle void, si le agregamos 
// un return, TS nos va a marcar el error
// 

(() => {

    const batman = (): void => {
        
    }
    const bat = batman()
    console.log(bat);
    

})()