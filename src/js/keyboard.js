/**
 * Обработка событий клавиатуры
 */
/**
 * Класс для обработки событий клавиатуры
 */
export class KeyboardHandler {
  /**
   * @param {import('./calculator.js').Calculator} calculator
   * @param {import('./ui.js').CalculatorUI} ui
   */
  constructor(calculator, ui) {
    this.calculator = calculator;
    this.ui = ui;
    this.init();
  }

  /**
   * Инициализирует обработчик событий клавиатуры
   */
  init() {
    document.addEventListener("keydown", (event) => {
      this.handleKeyPress(event);
    });
  }

  /**
   * Обрабатывает нажатие клавиши
   * @param {KeyboardEvent} event - событие клавиатуры
   */
  handleKeyPress(event) {
    const key = event.key;

    switch (key) {
      case "Delete":
      case "Escape":
        this.calculator.reset();
        this.ui.updateDisplay();
        break;

      case "=":
      case "Enter":
        this.calculator.evaluate();
        this.ui.updateDisplay();
        break;

      case "/":
        this.calculator.setOperation("divide");
        this.ui.updateDisplay();
        break;

      case "*":
        this.calculator.setOperation("multiply");
        this.ui.updateDisplay();
        break;

      case "+":
        this.calculator.setOperation("add");
        this.ui.updateDisplay();
        break;

      case "-":
        this.calculator.setOperation("subtract");
        this.ui.updateDisplay();
        break;

      case "%":
        this.calculator.calculatePercent();
        this.ui.updateDisplay();
        break;

      case ".":
      case ",":
        this.calculator.addDot();
        this.ui.updateDisplay();
        break;

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.calculator.addDigit(key);
        this.ui.updateDisplay();
        break;

      default:
        break;
    }
  }
}
