// Задание 1. Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    // Приватное свойство для хранение списка книг
    #books;

    // Конструктор для инициализации начального списка книг
    constructor(initialBooks = []) {
        if (!Array.isArray(initialBooks)) {
            throw new Error('Начальный список книг должен быть массивом');
        }
        const hasDublucates = new Set(initialBooks).size !== initialBooks.length;
        if (hasDublucates) {
            throw new Error('Начальный список книг содержит дубликаты');
        }

        this.#books = [...initialBooks];
    }

    // Геттер для получения всего списка книг

    get allBooks() {
        return [...this.#books];
    }

    // Метод для добавления книги в список
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга с названием "${title}" уже существует в библиотеке`);
        }
        this.#books.push(title);
    }

    // Метод для удалении книги из списка

    removeBook(title) {
        const bookIndex = this.#books.indexOf(title);
        if (bookIndex === -1) {
            throw new Error(`Книга с названием "${title}" не найдена в библиотеке`);
        }
        this.#books.splice(bookIndex, 1);
    }

    // Метод для проверки наличия книги в библиотеке
    hasBook(title) {
        return this.#books.includes(title);
    }
}

try {
    const library = new Library(['Гарри Поттер', 'Властелин колец']);
    console.log(library.allBooks);
    library.addBook('Дюна');
    console.log(library.allBooks);
    library.removeBook('Гарри Поттер');
    console.log(library.allBooks);
    console.log(library.hasBook('Дюна'));
    console.log(library.hasBook('Гарри Поттер'));
} catch (error) {
    console.error(error.message);
}