export const data = {
    clientsCount: 0
}

let callback = function () { }

// каждую секунду будем увеличивать data.count 
setTimeout(function () {
    data.clientsCount = data.clientsCount += 2;
    // и затем перерисовывать весь счётчик 
    callback();
}, 3000);

export function setCallback(newCallback) {
    callback = newCallback;
}

export function increaseClientsCount() {
    data.clientsCount++;
    callback();
}

export function decreaseClientsCount() {
    data.clientsCount--;
    callback();
}