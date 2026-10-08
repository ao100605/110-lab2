const pets: string[] = ["cat", "dog", "hamster", "parrot"];

export function printPets(){
    for (const pet of pets){
        console.log(pet);
    }
    return;
}

printPets();
