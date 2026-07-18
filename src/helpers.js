function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(random(min, max + 1));
}

function randomItem(array) {
    return array[randomInt(0, array.length - 1)];
}

function porcentaje(probabilidad) {
    return Math.random() < probabilidad;
}

module.exports = {
    random,
    randomInt,
    randomItem,
    porcentaje
};