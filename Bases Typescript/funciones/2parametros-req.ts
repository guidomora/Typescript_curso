(() => {
    // Asi se defino el tipo de dato en los parametros
    // 
    const fullName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`
    }

    // Si pasamos solo un argumento nos va a marcar error pq los 2 son obliatorios
    const name = fullName("Tony", "Stark")
    console.log({name});
    
})()