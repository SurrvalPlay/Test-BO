// scores.js
let score = 0; // змінна для підрахунку балів

/**
 * Додає 1 бал до загальної кількості.
 */
function addPoint() {
    score++;
}

/**
 * Скидає кількість балів до нуля.
 */
function resetScore() {
    score = 0;
}

/**
 * Повертає поточну кількість балів.
 * @returns {number} Поточна кількість балів
 */
function getScore() {
    return score;
}
