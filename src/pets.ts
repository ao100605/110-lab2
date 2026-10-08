import {Bold} from "./animation"

export const pets: string[] = ["cat", "dog", "hamster", "parrot"];

export function printPets(){
    for (const pet of pets){
        Bold(pet)
    }
    return;
}

printPets();
