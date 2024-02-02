// Завдання 1: Дано масив, використовуючи цикл "for in" виведіть на консоль всі індекси цього масиву
function printIndexes(array) {
	// Проходимося по всіх індексах масиву
	// Виводимо кожен індекс на консоль
	for (const index in array) {
		console.log(index);
	}
}

console.log("Завдання 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Виведе
// 0
// 1
// 2
// 3
// 4

// Завдання 2: Дано масив, використовуючи цикл "for in" знайдіть суму всіх елементів масиву
function sumArray(array) {
	// Ініціалізуємо змінну для зберігання суми
	// Проходимося по всіх індексах масиву
	// Додаємо кожен елемент до загальної суми
	// Повертаємо суму
	let sum = 0;

	for (const n of array) {
		sum += n;
	}

	return sum;
}

console.log("Завдання 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15

// Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
function multiplyArray(array) {
	// Ініціалізуємо змінну для зберігання добутку
	// Проходимося по всіх значеннях масиву
	// Множимо кожен елемент на загальний добуток
	// Повертаємо добуток
	let prod = 1;

	for (const n of array) {
		prod *= n;
	}

	return prod;
}

console.log("Завдання 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120

// Завдання 4: Дано масив рядків. Видаліть третій елемент масиву та перетворіть в рядок за допомогою методу toString(). Результат виведіть на консоль.
function modifyArray(array) {
	// Видаляємо третій елемент масиву
	// Виводимо масив перетворений в рядок

	delete array[2];

	console.log(array.toString());
}

console.log("Завдання 4 ====================================");
modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5

// Завдання 5: Дано масив рядків. За допомогою циклу for переберіть масив, виведіть кожен елемент на консоль у верхньому регістрі.
function printUppercase(array) {
	// Проходимося по всіх елементах масиву
	// Перетворюємо кожен елемент в верхній регістр та виводимо на консоль
	for (const n of array) {
		console.log(n.toUpperCase());
	}
}

console.log("Завдання 5 ====================================");
printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE

// Завдання 6: Функція приймає деструктуризований масив чисел де буду перший елемент та масив всіх інших.
// За допомогою циклу for переберіть масив, знайдіть мінімальне та максимальне значення. Результат виведіть на консоль.
function findMinMax([firstElement, ...restElements]) {
	// Ініціалізуємо змінні для мінімального та максимального значень, задаємо їм перше значення масиву
	// Перебираємо масив починаючи з другого елементу
	// Перевіряємо, чи поточний елемент менший за мінімальне значення
	// Якщо так, оновлюємо мінімальне значення
	// Перевіряємо, чи поточний елемент більший за максимальне значення
	// Якщо так, оновлюємо максимальне значення
	// Виводимо мінімальне та максимальне значення
	let max = firstElement;
	let min = firstElement;

	for (let el of restElements) {
		if (el < min) {
			min = el;
		} else if (el > max) {
			max = el;
		}
	}

	console.log("min:", min, "max:", max);
}

console.log("Завдання 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

// Завдання 7: Функція приймає масив рядків.
// Перетворіть масив в рядок за допомогою методу toString() та повторіть його 2 рази. Результат виведіть на консоль.
function printStrings(array) {
	// Перетворюємо масив в рядок і видаляемо пробіли та виводимо його на консоль
	console.log(array.toString().repeat(2).trim());
}

console.log("Завдання 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5

// Завдання 8: Функція приймає масив рядків.
// За допомогою методу toString() перетворіть масив в рядок, та виясніть чи є в цьому рядку підрядок subString .

function concatenateStrings(array, subString) {
	// Використовуємо метод toString() для перетворення масиву в рядок
	//Перевіряємо чи містить рядок підрядок
	// Виводимо результат

	console.log(array.toString().includes(subString));
}

console.log("Завдання 8 ====================================");
concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

// Завдання 9: Функція приймає масив чисел.
// За допомогою циклу for-in переберіть масив, додайте до кожного елемента 10.
// Зберігайте результат в новому масиві. Результат виведіть на консоль.
function addTenToEach(array) {
	// Ініціалізуємо масив через конструктор з такою же кількістю елементів як в вхідному масиві для зберігання результату
	// Перебираємо масив за допомогою циклу for-in
	// Додаємо до поточного елемента 10 та додаємо результат в новий масив
	// Виводимо результат
	let arr = Array(array.length);

	for (let index in array) {
		arr[index] = array[index] + 10;
	}

	console.log(arr);
}

console.log("Завдання 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]

// Завдання 10: Створити функцію, яка приймає масив чисел як аргумент.
function swapMinMax(array) {
	// Ініціалізуємо дві змінні (max і min) з першим елементом масиву. Ці змінні будуть використовуватися для зберігання максимального та мінімального значень в масиві.
	// Ініціалізуємо дві змінні (maxIndex і minIndex) з нульового значення. Ці змінні будуть використовуватися для зберігання індексів максимального та мінімального значень в масиві.
	// Використовуємо цикл for для ітерації по масиву. Починаємо з першого елемента (i = 0) і продовжуємо до останнього елемента масиву (i < array.length).
	// Умова if перевіряє, чи є поточний елемент масиву більшим за поточне максимальне значення. Якщо це так, оновлюємо max з поточним елементом масиву та maxIndex з поточним індексом.
	// Умова else if перевіряє, чи є поточний елемент масиву меншим за поточне мінімальне значення. Якщо це так, оновлюємо min з поточним елементом масиву та minIndex з поточним індексом.
	// Застосовуємо деструктуризацію масиву для обміну місцями мінімального та максимального значення в масиві.
	// Функція повертає масив, в якому мінімальне та максимальне значення обміняні місцями.
	let min = array[0];
	let max = array[0];
	let minIndex = 0;
	let maxIndex = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
			maxIndex = i;
		} else if (array[i] < min) {
			min = array[i];
			minIndex = i;
		}
	}

	[array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]];

	return array;
}

console.log("Завдання 10 ====================================");
// Виводимо в консоль результат виклику функції swapMinMax з масивом [1, 2, 3, 4, 5] як аргументом. Очікуємо бачити [5, 2, 3, 4, 1], оскільки максимальне та мінімальне значення обміняні місцями.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Завдання 11: Функція приймає масив чисел. Поверніть новий масив, який містить тільки парні числа з оригінального масиву.
function getEvenNumbers(arr) {
	// Створюємо пустий масив для зберігання результату
	// Проходимо через кожен елемент вхідного масиву
	// Перевіряємо чи є число парним
	// Якщо так, додаємо його до масиву результату
	// Повертаємо масив результату
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2) {
			newArr = [...newArr, arr[i]];
		}
	}

	return newArr;
}
console.log("Завдання 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]

// Завдання 12: Функція приймає масив чисел. Поверніть новий масив, в якому всі числа помножені на їх індекс.
function multiplyByIndex(arr) {
	// Створюємо пустий масив для зберігання результату
	// Проходимо через кожен елемент вхідного масиву
	// Помножуємо число на його індекс і додаємо до масиву результату
	// Повертаємо масив результату
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr = [...newArr, arr[i] * i];
	}

	return newArr;
}
console.log("Завдання 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]

// Завдання 13: Функція приймає масив чисел. Повертає новий масив, в якому всі числа більші за 10 замінені на рядок "Greater than 10", а решта чисел замінені на рядок "Less than or equal to 10".
function replaceNumbers(arr) {
	// Створюємо пустий масив для зберігання результату
	// Проходимо через кожен елемент вхідного масиву
	// Перевіряємо, чи число більше за 10
	// Якщо число більше за 10, додаємо рядок "Greater than 10" до масиву результату
	// Якщо число менше або дорівнює 10, додаємо рядок "Less than or equal to 10" до масиву результату
	// Повертаємо масив результату
	// let startArr = [];
	// if (arr > 10) {
	// 	arr = "Greater than 10";
	// } else if (arr <= 10) {
	// 	arr = "Less than or equal to 10";
	// }
	// return startArr;
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 10) {
			result = [...result, "Greater than 10"];
		} else {
			result = [...result, "Less than or equal to 10"];
		}
	}

	return result;
}

console.log("Завдання 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]
