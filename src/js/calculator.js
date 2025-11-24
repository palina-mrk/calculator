/**
 * Основная логика калькулятора
 */
import { performOperation, calculatePercent } from "./operations.js";

const MAX_LENGTH = 10;

/**
 * Класс калькулятора для управления состоянием и вычислениями
 */
export class Calculator {
  constructor() {
    this.valueSaved = "0";
    this.valueVisible = "0";
    this.isDot = false;
    this.lastOp = "";
    this.maxLength = MAX_LENGTH;
  }

  /**
   * Форматирует результат для отображения
   * @param {number} number - число для форматирования
   * @returns {string} отформатированная строка
   */
  getResult(number) {
    const numberStr = String(number);
    const dotIndex = numberStr.indexOf(".");

    if (dotIndex === -1) {
      return numberStr.length < this.maxLength ? numberStr : "error";
    }
    if (dotIndex === this.maxLength - 2) {
      return numberStr.slice(0, this.maxLength - 2);
    }
    if (dotIndex <= this.maxLength) {
      return numberStr.slice(0, this.maxLength - 1);
    }
    return "error";
  }

  /**
   * Сбрасывает калькулятор
   */
  reset() {
    this.valueVisible = "0";
    this.isDot = false;
    this.valueSaved = "0";
    this.lastOp = "";
  }

  /**
   * Меняет знак числа
   */
  toggleSign() {
    if (this.valueVisible === "error") {
      return;
    }

    if (this.valueVisible[0] === "-") {
      this.valueVisible = this.valueVisible.slice(1);
    } else if (this.valueVisible !== "0") {
      this.valueVisible = "-" + this.valueVisible;
    }
  }

  /**
   * Добавляет цифру к текущему значению
   * @param {string} digit - цифра для добавления
   */
  addDigit(digit) {
    if (this.valueVisible.length >= this.maxLength) {
      return;
    }
    if (this.valueVisible === "error") {
      return;
    }

    if (this.valueVisible === "0") {
      this.valueVisible = digit;
    } else {
      this.valueVisible += digit;
    }
  }

  /**
   * Добавляет точку к текущему значению
   */
  addDot() {
    if (this.valueVisible.length >= this.maxLength) {
      return;
    }
    if (this.valueVisible === "error") {
      return;
    }

    if (!this.isDot) {
      this.isDot = true;
      this.valueVisible += ".";
    }
  }

  /**
   * Устанавливает операцию
   * @param {string} operation - тип операции
   */
  setOperation(operation) {
    this.lastOp = operation;
    this.valueSaved = this.valueVisible;
    this.valueVisible = "0";
    this.isDot = false;
  }

  /**
   * Выполняет вычисление
   */
  evaluate() {
    if (!this.lastOp) {
      return;
    }

    const savedNum = Number(this.valueSaved);
    const currentNum = Number(this.valueVisible);

    const result = performOperation(this.lastOp, savedNum, currentNum);
    this.valueSaved = this.valueVisible;
    this.valueVisible = this.getResult(result);
    this.isDot = this.valueVisible.includes(".");
  }

  /**
   * Вычисляет процент
   */
  calculatePercent() {
    if (!this.lastOp) {
      return;
    }

    const savedNum = Number(this.valueSaved);
    const currentNum = Number(this.valueVisible);

    const result = calculatePercent(this.lastOp, savedNum, currentNum);
    this.valueSaved = this.valueVisible;
    this.valueVisible = this.getResult(result);
    this.isDot = this.valueVisible.includes(".");
  }

  /**
   * Получает текущее отображаемое значение
   * @returns {string} текущее значение
   */
  getValue() {
    return this.valueVisible;
  }
}
