(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            //console.log("llamado");
        }
        // Con el protected podemos acceder a los metodos de clases extendidas
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    // Geters y Seters internamente son como metodos
    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            //console.log("Constructoe xmen llamado");
        }
        // Retorna un valor
        get fullName() {
            return `${this.name} ${this.realName}`
        }
        // Metodo que establece un valor y establece algo. No regresa nada
        // Y solo recivbe un argumento
        set fullName(name:string){
            if (name.length < 3) {
                throw new Error("Nombre corto");
            }
        }

        getFullNameDesdeXmen() {
            //console.log(this.getFullName());
            
        }
    }
    const wolvewrine = new Xmen("Wolverine", "Logan", true)
    wolvewrine.fullName ="Guido"
    //console.log(wolvewrine.fullName);
    
    //wolvewrine.getFullNameDesdeXmen()

})()