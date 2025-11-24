/**
 * Управление темами и цветами калькулятора
 */

/**
 * Класс для управления темами калькулятора
 */
export class ThemeManager {
  constructor() {
    this.colorInputs = {
      back: document.querySelector("#back-color"),
      text: document.querySelector("#text-color"),
      right: document.querySelector("#btn-right-color"),
      top: document.querySelector("#btn-top-color"),
      standard: document.querySelector("#btn-standard-color"),
    };

    this.bodyEl = document.querySelector(".calculator");
    this.valueInput = document.querySelector("#num-value");
    this.btnsAllArray = document.querySelectorAll(".btn");
    this.btnsRight = {
      divide: document.querySelector("#func-div"),
      multiply: document.querySelector("#func-mul"),
      subtract: document.querySelector("#func-sub"),
      add: document.querySelector("#func-add"),
      evaluate: document.querySelector("#func-eval"),
    };
    this.btnsTop = {
      reset: document.querySelector("#func-reset"),
      sign: document.querySelector("#func-sign"),
      percent: document.querySelector("#func-percent"),
    };
    this.btnsStandard = [];
    for (let i = 0; i <= 9; i++) {
      this.btnsStandard[i] = document.querySelector(`#input-${i}`);
    }
    this.btnsStandard[10] = document.querySelector("#input-dot");

    this.init();
  }

  /**
   * Инициализирует обработчики событий для изменения цветов
   */
  init() {
    Object.keys(this.colorInputs).forEach((inputKey) => {
      const inputEl = this.colorInputs[inputKey];
      if (inputEl) {
        inputEl.addEventListener("input", (event) => {
          this.handleColorChange(inputKey, event.currentTarget.value);
        });
      }
    });
  }

  /**
   * Обрабатывает изменение цвета
   * @param {string} colorType - тип цвета
   * @param {string} colorValue - новое значение цвета
   */
  handleColorChange(colorType, colorValue) {
    switch (colorType) {
      case "back":
        if (this.bodyEl) {
          this.bodyEl.style.backgroundColor = colorValue;
        }
        break;
      case "text":
        if (this.valueInput) {
          this.valueInput.style.color = colorValue;
        }
        this.btnsAllArray.forEach((btnEl) => {
          btnEl.style.color = colorValue;
        });
        break;
      case "right":
        Object.values(this.btnsRight).forEach((btnEl) => {
          if (btnEl) {
            btnEl.style.backgroundColor = colorValue;
          }
        });
        break;
      case "top":
        Object.values(this.btnsTop).forEach((btnEl) => {
          if (btnEl) {
            btnEl.style.backgroundColor = colorValue;
          }
        });
        break;
      case "standard":
        this.btnsStandard.forEach((btnEl) => {
          if (btnEl) {
            btnEl.style.backgroundColor = colorValue;
          }
        });
        break;
      default:
        break;
    }
  }
}
