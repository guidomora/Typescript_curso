(()=> {
    // para controlar la menera en la cual nuestras instancias son ejecutadas
    // singletons?
    class Apocalipsis {
        static instance:Apocalipsis;
        private constructor(public name: string) {

        }

        static callApocalipsis():Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis")
            }
            return Apocalipsis.instance
        }
    }
    const apocalipsis1= Apocalipsis.callApocalipsis()
   
    
})()