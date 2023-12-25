import { increaseClientsCount } from "../../../data/data.js";

export function increaseButton() {
    const element = document.createElement('button');
    element.append('+');
    element.addEventListener("click", increaseClientsCount);
    return element;
}