(()=>{
    type Hero = {
        name:string,
        age?:number,
        powers: string[],
        getNombre?: () => string
    }

    let myCustomVariable: string | number | Hero = "Guido"
    console.log(typeof myCustomVariable);
    
    myCustomVariable = {
        name: "Guidito",
        age: 23,
        powers:["buho volador"]
    }
    console.log(typeof myCustomVariable);
    
})()