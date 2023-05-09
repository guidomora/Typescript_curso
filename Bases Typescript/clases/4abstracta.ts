(()=> {

    // Sirven para crear otras clases o que implementen lo que nosotros
    // esperamos
    abstract class Mutante {
        constructor(
            public name:string,
            public realName: string,
        ) {}
    }

    class Xmen extends Mutante {
        // Metodos especializados para cada clase
        salvarMundo(){
            return "Mundo salvado"
        }
    }
    class Villain extends Mutante {
        conquistarMundo(){
            return "Mundo conquistado"
        }
    }

    const wolverine = new Xmen("Wolverine","Logan")
    const magneto = new Villain("MAgneto","magnus")
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) => {
        console.log(character.realName);
    }
    //printName(magneto)
    
})()