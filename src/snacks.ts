import { Bold } from "./animation"

export const snacks: string[] = ["chips", "chocolate"];

export function printSnacks() {
    for (const snack of snacks) {
        Bold(snack);
    }
}