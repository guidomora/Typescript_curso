// este dato solo existe en TS. Enumeraciones
// Ayuda a trabajar con valores que tengan un sentido semantico


(() => {
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
        // asi le asignamos valores 
    }

    let currentAudio = AudioLevel.medium
    console.log(currentAudio);
    console.log(AudioLevel);
})()