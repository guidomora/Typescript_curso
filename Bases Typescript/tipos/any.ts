// Usar este tipo de dato lo menos posible, aunque el ""noImplicitAny": true"
// de la config ya nos va ayudar bastante
// 
// Le podemos aplicar todos los metodos y no hay problema, pero no nos arroja
// la ayuda


(() => {
    let avenger: any = 123
    let exists;
    let power;

    avenger = "Dr strange"
    console.log(avenger.charAt(0));



    // En este caso tenemos la ayuda, pero pq indicamos que es string
    console.log((avenger as string).charAt(0) );
    


    avenger =150.345354
    console.log(avenger.toFixed(2));

    // Lo mismo ene ste caso, tamb se puede poner "as number"
    console.log((<number>avenger).toFixed(2) );
    

    console.log(exists);
    console.log(power);

})()