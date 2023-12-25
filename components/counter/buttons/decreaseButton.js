import { decreaseClientsCount } from "../../../data/data.js";

export function decreaseButton() {
    const element = document.createElement('button');
    element.append('-');
    element.addEventListener("click", decreaseClientsCount);
    return element;
}