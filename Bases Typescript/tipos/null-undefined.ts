// null no es lo mismo que undefined
// 


(() => {
    // isActive puede ser undefined, un booleano o null;
    let isActive: (undefined | boolean | null) = null
    console.log(isActive);


})()