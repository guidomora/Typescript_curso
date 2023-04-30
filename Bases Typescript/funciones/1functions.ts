
(() => {

    const hero: string = "Flash"

    function returnName(): string {
        return hero
    }

    const activeteBatSignal = () => {
        return "Bati senal"
    }

    console.log(typeof activeteBatSignal);
    
    const heroName = returnName()
    console.log(heroName);
    
})()