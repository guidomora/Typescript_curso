(() => {

    // Interfaz ppal
    interface Cliente {
        name: string
        age?: number
        address:Address
        getFullAddress(id: string):string;
    }
    // Interfaz secundaria, se le anida a la ppal
    interface Address {
        id: number
        zip: string
        city: string
    }

    const cliente: Cliente = {
        name: "GUido",
        age: 23,
        address: {
            id: 123,
            zip: "ASD ASD",
            city: "CABA"
        },
        getFullAddress(id:string) {
            return this.address.city
        },
    }

    const cliente2: Cliente = {
        name: "GUido",
        age: 23,
        address: {
            id: 345,
            zip: "rew dfg",
            city: "jujuy"
        },
        getFullAddress(id:string) {
            return this.address.city
        },
    }


})()