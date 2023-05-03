(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: "Samuel L",
        ironman: "Robert",
        vision: "Paul",
        activo: true,
        poder: 1500.3423
    }

    // const {poder, vision } = avengers
    // console.log(poder, vision);

    const printAvenger = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto);
    }
    //printAvenger(avengers)



    // Desestruturacion de arrays
    const avengersArr:[string, boolean, number] = ["Cap", true, 144]
    const [capi,superBoolean,numerito ] = avengersArr
    //console.log({capi,superBoolean,numerito});
    
    

})()