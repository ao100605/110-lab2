import {Bold} from "./animation"

const pets: string[] = ["cat", "dog", "hamster", "parrot"];

export function printPets(){
    for (const pet of pets){
        Bold(pet)
    }
    return;
}

printPets();
