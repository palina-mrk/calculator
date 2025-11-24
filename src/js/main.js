/**
 * Главный файл приложения - точка входа
 */
import "../css/style.css";
import { Calculator } from "./calculator.js";
import { CalculatorUI } from "./ui.js";
import { ThemeManager } from "./theme.js";
import { KeyboardHandler } from "./keyboard.js";

// Инициализация приложения после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  const calculator = new Calculator();
  const ui = new CalculatorUI(calculator);
  // Инициализация темы (создает обработчики событий)
  const themeManager = new ThemeManager();
  // Инициализация обработки клавиатуры (создает обработчики событий)
  const keyboardHandler = new KeyboardHandler(calculator, ui);

  // Экспорт для отладки (опционально)
  if (typeof window !== "undefined") {
    window.calculator = calculator;
  }

  // themeManager и keyboardHandler используются для инициализации
  // (побочные эффекты в конструкторах - создание обработчиков событий)
  void themeManager;
  void keyboardHandler;
});
