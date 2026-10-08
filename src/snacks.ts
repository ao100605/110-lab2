import { Bold } from "./animation"

const snackNames: string[] = ["chips", "chocolate", "fries", "candy"];

export function printSnacks() {
    for (const snack of snackNames) {
        Bold(snack);
    }
}