import { Bold } from "./animation"

const snackNames: string[] = ["chips", "chocolate", "fries", "candy", "cookies", "banana", "shrimp crackers"];

export function printSnacks() {
    for (const snack of snackNames) {
        Bold(snack);
    }
}