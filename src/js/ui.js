/**
 * Управление пользовательским интерфейсом калькулятора
 */
/**
 * Класс для управления UI калькулятора
 */
export class CalculatorUI {
  /**
   * @param {import('./calculator.js').Calculator} calculator
   */
  constructor(calculator) {
    this.calculator = calculator;
    this.valueInput = document.querySelector("#num-value");
    if (this.valueInput) {
      this.valueInput.readOnly = true;
    }

    this.btnsTop = {
      reset: document.querySelector("#func-reset"),
      sign: document.querySelector("#func-sign"),
      percent: document.querySelector("#func-percent"),
    };

    this.btnsRight = {
      divide: document.querySelector("#func-div"),
      multiply: document.querySelector("#func-mul"),
      subtract: document.querySelector("#func-sub"),
      add: document.querySelector("#func-add"),
      evaluate: document.querySelector("#func-eval"),
    };

    this.btnsStandard = [];
    for (let i = 0; i <= 9; i++) {
      this.btnsStandard[i] = document.querySelector(`#input-${i}`);
    }
    this.btnsStandard[10] = document.querySelector("#input-dot");

    this.init();
  }

  /**
   * Инициализирует обработчики событий для кнопок
   */
  init() {
    // Кнопки сброса, знака и процента
    if (this.btnsTop.reset) {
      this.btnsTop.reset.addEventListener("click", () => {
        this.calculator.reset();
        this.updateDisplay();
      });
    }

    if (this.btnsTop.sign) {
      this.btnsTop.sign.addEventListener("click", () => {
        this.calculator.toggleSign();
        this.updateDisplay();
      });
    }

    if (this.btnsTop.percent) {
      this.btnsTop.percent.addEventListener("click", () => {
        this.calculator.calculatePercent();
        this.updateDisplay();
      });
    }

    // Кнопки операций
    Object.keys(this.btnsRight).forEach((btnKey) => {
      const btnEl = this.btnsRight[btnKey];
      if (btnEl) {
        btnEl.addEventListener("click", () => {
          if (btnKey !== "evaluate") {
            this.calculator.setOperation(btnKey);
            this.updateDisplay();
          } else {
            this.calculator.evaluate();
            this.updateDisplay();
          }
        });
      }
    });

    // Кнопки цифр и точки
    this.btnsStandard.forEach((btnEl, index) => {
      if (btnEl) {
        btnEl.addEventListener("click", () => {
          if (index === 10) {
            // Точка
            this.calculator.addDot();
          } else {
            // Цифра
            this.calculator.addDigit(String(index));
          }
          this.updateDisplay();
        });
      }
    });
  }

  /**
   * Обновляет отображение значения в поле ввода
   */
  updateDisplay() {
    if (this.valueInput) {
      this.valueInput.value = this.calculator.getValue();
    }
  }
}
