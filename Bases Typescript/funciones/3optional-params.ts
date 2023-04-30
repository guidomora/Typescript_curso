(() => {

    // Le agregamos el signo de interrogacion para marcarlo como opcional
    const fullName = (firstName:string, lastName?:string):string => {
        // si no hay lastname retorna el string
        return `${firstName} ${lastName || " ---- "}`
    }

    const name = fullName("Tony")
    console.log({name});
    
})()