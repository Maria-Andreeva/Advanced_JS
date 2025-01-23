/* Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)*/

const musicCollection = [
    { title: "U Can't Touch This", artist: "MC Hammer", year: "1990" },
    { title: "Let It Be", artist: "The Beatles", year: "1970" },
    { title: "Californication", artist: "Red Hot Chili Peppers", year: "1999" },
    { title: "Let It Be", artist: "The Beatles", year: "1970" },
];


musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
            ? { done: false, value : musicCollection[this.current++] }
            : { done : true };
        }
    }
}

for (let music of musicCollection) {
    console.log(`Название: ${music.title}, Автор: ${music.artist}, Год выпуска: ${music.year}`);
}