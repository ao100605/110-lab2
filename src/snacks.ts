import { Bold } from "./animation"

export const snacks: string[] = ["chips", "chocolate", "fries", "candy", "cookies", "banana", "shrimp crackers"];

export function printSnacks() {
    for (const snack of snacks) {
        Bold(snack);
    }
}