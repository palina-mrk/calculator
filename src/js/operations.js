/**
 * Математические операции калькулятора
 * Реализованы без использования eval и Math объекта
 */

/**
 * Выполняет деление двух чисел
 * @param {number} a - делимое
 * @param {number} b - делитель
 * @returns {number|string} результат или 'error' при делении на ноль
 */
export function divide(a, b) {
  if (b === 0) {
    return "error";
  }
  return a / b;
}

/**
 * Выполняет умножение двух чисел
 * @param {number} a - первый множитель
 * @param {number} b - второй множитель
 * @returns {number} результат умножения
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Выполняет сложение двух чисел
 * @param {number} a - первое слагаемое
 * @param {number} b - второе слагаемое
 * @returns {number} результат сложения
 */
export function add(a, b) {
  return a + b;
}

/**
 * Выполняет вычитание двух чисел
 * @param {number} a - уменьшаемое
 * @param {number} b - вычитаемое
 * @returns {number} результат вычитания
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Вычисляет процент от числа в зависимости от последней операции
 * @param {string} operation - тип операции ('divide', 'multiply', 'add', 'subtract')
 * @param {number} savedValue - сохраненное значение
 * @param {number} currentValue - текущее значение
 * @returns {number|string} результат вычисления процента
 */
export function calculatePercent(operation, savedValue, currentValue) {
  switch (operation) {
    case "divide":
      return currentValue !== 0
        ? multiply(multiply(savedValue, 100), 1 / currentValue)
        : "error";
    case "multiply":
      return multiply(multiply(savedValue, currentValue), 1 / 100);
    case "add":
      return multiply(savedValue, add(1, multiply(currentValue, 1 / 100)));
    case "subtract":
      return multiply(savedValue, subtract(1, multiply(currentValue, 1 / 100)));
    default:
      return "error";
  }
}

/**
 * Выполняет математическую операцию
 * @param {string} operation - тип операции
 * @param {number} savedValue - сохраненное значение
 * @param {number} currentValue - текущее значение
 * @returns {number|string} результат операции
 */
export function performOperation(operation, savedValue, currentValue) {
  switch (operation) {
    case "divide":
      return divide(savedValue, currentValue);
    case "multiply":
      return multiply(savedValue, currentValue);
    case "add":
      return add(savedValue, currentValue);
    case "subtract":
      return subtract(savedValue, currentValue);
    default:
      return "error";
  }
}
