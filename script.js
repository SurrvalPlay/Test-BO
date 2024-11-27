let currentScenario = 0;
let language = 'uk';
let correctAnswersCount = 0;
const answeredScenarios = new Set();

const translations = {
    uk: {
        title: "Сценарії для банківських рахунків - Квіз",
        scenarioTitle: "Сценарій для банківського рахунку",
        prevButton: "Повернутися до минулого сценарію",
        nextButton: "Перейти до наступного сценарію",
        restartButton: "Перезапустити",
        correctAnswer: "Вірна відповідь!",
        wrongAnswer: "Неправильна відповідь.",
        alreadyAnswered: "Ви вже відповіли на це питання.",
        finalScore: "Ваш результат:",
        noScenarios: "Немає доступних сценаріїв.",
    },
    de: {
        title: "Bankkontoszenarien - Quiz",
        scenarioTitle: "Szenarien für Bankkonten",
        prevButton: "Zum vorherigen Szenario zurückkehren",
        nextButton: "Zum nächsten Szenario wechseln",
        restartButton: "Neustarten",
        correctAnswer: "Richtige Antwort!",
        wrongAnswer: "Falsche Antwort.",
        alreadyAnswered: "Sie haben diese Frage bereits beantwortet.",
        finalScore: "Ihr Ergebnis:",
        noScenarios: "Keine Szenarien verfügbar.",
    }
};

const scenarios = {
            uk: [
                {
                    question: "Анна тільки що переїхала до Німеччини для роботи. Їй потрібно отримувати заробітну плату, платити за оренду, комунальні послуги та робити щоденні покупки. Який банківський рахунок їй слід відкрити?",
                    options: [
                        "Поточний рахунок (Girokonto)",
                        "Ощадний рахунок (Sparkonto)",
                        "Депозитний рахунок (Festgeldkonto)"
                    ],
                    correct: 0,
                    explanation: "Поточний рахунок призначений для щоденних фінансових операцій. Анна зможе легко керувати своїми щоденними фінансами через цей рахунок."
                },
                {
                    question: "Олексій хоче відкладати гроші на майбутню подорож, але бажає мати можливість зняти їх у разі потреби. Він також хоче отримувати відсотки на свій залишок. Який рахунок йому слід вибрати?",
                    options: [
                        "Ощадний рахунок (Sparkonto)",
                        "Інвестиційний рахунок (Wertpapierdepot)",
                        "Базовий рахунок (Basiskonto)"
                    ],
                    correct: 0,
                    explanation: "Ощадний рахунок ідеально підходить для накопичення коштів з можливістю отримувати відсотки. Олексій зможе відкладати гроші на подорож і при необхідності знімати їх."
                },
                {
                    question: "Ірина нещодавно прибула до Німеччини як біженка. Вона не має постійного місця проживання або підтвердженого доходу, але потребує рахунок для отримання соціальної допомоги та здійснення основних платежів. Який рахунок вона може відкрити?",
                    options: [
                        "Базовий рахунок (Basiskonto)",
                        "Депозитний рахунок (Festgeldkonto)",
                        "Поточний рахунок (Girokonto)"
                    ],
                    correct: 0,
                    explanation: "Базовий рахунок надається всім особам, незалежно від їхнього фінансового стану. Він забезпечує основні банківські послуги, що дозволить Ірині отримувати соціальну допомогу та здійснювати платежі."

},
                {
                    question: "Микола має значну суму грошей, яку він хоче вкласти на рік з гарантованим відсотком. Він не планує користуватися цими грошима протягом цього часу. Який рахунок йому слід вибрати?",
                    options: [
                        "Ощадний рахунок (Sparkonto)",
                        "Депозитний рахунок (Festgeldkonto)",
                        "Поточний рахунок (Girokonto)"
                    ],
                    correct: 1,
                    explanation: "Депозитний рахунок дозволяє вкласти гроші на фіксований термін з фіксованою відсотковою ставкою. Микола отримає гарантований дохід і не матиме доступу до коштів протягом року, що відповідає його планам."
                },
                {
                    question: "Світлана хоче інвестувати свої заощадження в акції та облігації з метою отримання більшого прибутку. Вона готова прийняти певний ризик. Який рахунок їй потрібен?",
                    options: [
                        "Інвестиційний рахунок (Wertpapierdepot)",
                        "Ощадний рахунок (Sparkonto)",
                        "Базовий рахунок (Basiskonto)"
                    ],
                    correct: 0,
                    explanation: "Інвестиційний рахунок використовується для купівлі та зберігання цінних паперів. Світлана зможе інвестувати в акції та облігації через цей рахунок."
                }
            ],
            de: [
                {
                    question: "Anna ist gerade nach Deutschland gezogen, um zu arbeiten. Sie muss ihr Gehalt erhalten, Miete zahlen, Nebenkosten begleichen und tägliche Einkäufe tätigen. Welches Bankkonto sollte sie eröffnen?",
                    options: [
                        "Girokonto",
                        "Sparkonto",
                        "Festgeldkonto"
                    ],
                    correct: 0,
                    explanation: "Ein Girokonto ist für tägliche finanzielle Transaktionen gedacht. Anna kann ihr tägliches Finanzmanagement problemlos über dieses Konto abwickeln."
                },
                {
                    question: "Alexej möchte Geld für eine zukünftige Reise sparen, aber im Notfall darauf zugreifen können. Er möchte auch Zinsen auf sein Guthaben erhalten. Welches Konto sollte er wählen?",
                    options: [
                        "Sparkonto",
                        "Wertpapierdepot",
                        "Basiskonto"
                    ],
                    correct: 0,
                    explanation: "Ein Sparkonto ist ideal zum Sparen und bietet die Möglichkeit, Zinsen zu erhalten. Alexej kann das Geld für seine Reise sparen und bei Bedarf darauf zugreifen."
                },
                {
                    question: "Irina ist vor Kurzem als Flüchtling nach Deutschland gekommen. Sie hat keinen festen Wohnsitz oder bestätigtes Einkommen, benötigt aber ein Konto, um Sozialhilfe zu erhalten und grundlegende Zahlungen zu tätigen. Welches Konto kann sie eröffnen?",
                    options: [
                        "Basiskonto",
                        "Festgeldkonto",
                        "Girokonto"
                    ],
                    correct: 0,
                    explanation: "Ein Basiskonto steht allen Personen unabhängig von ihrer finanziellen Situation zur Verfügung. Es bietet grundlegende Bankdienstleistungen, die es Irina ermöglichen, Sozialhilfe zu erhalten und Zahlungen zu tätigen."
                },
                {
                    question: "Mykola hat eine beträchtliche Geldsumme, die er für ein Jahr mit garantierten Zinsen anlegen möchte. Er plant, dieses Geld in dieser Zeit nicht zu nutzen. Welches Konto sollte er wählen?",
                    options: [
"Sparkonto",
                        "Festgeldkonto",
                        "Girokonto"
                    ],
                    correct: 1,
                    explanation: "Ein Festgeldkonto ermöglicht es, Geld für einen festen Zeitraum mit einem festen Zinssatz anzulegen. Mykola erhält garantierte Erträge und hat während des Jahres keinen Zugang zu seinem Geld, was seinen Plänen entspricht."
                },
                {
                    question: "Svitlana möchte ihr Erspartes in Aktien und Anleihen investieren, um höhere Erträge zu erzielen. Sie ist bereit, ein gewisses Risiko einzugehen. Welches Konto benötigt sie?",
                    options: [
                        "Wertpapierdepot",
                        "Sparkonto",
                        "Basiskonto"
                    ],
                    correct: 0,
                    explanation: "Ein Wertpapierdepot wird für den Kauf und die Lagerung von Wertpapieren genutzt. Svitlana kann darüber in Aktien und Anleihen investieren."
                }
            ]
        };

function loadScenario() {
    const scenarioList = scenarios[language];

    if (currentScenario >= scenarioList.length) {
        // Коли всі питання пройдено, показуємо фінальний екран
        showFinalScore();
        return;
    }

    const scenario = scenarioList[currentScenario];
    document.getElementById("question").innerText = scenario.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    if (!answeredScenarios.has(currentScenario)) {
        scenario.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
    } else {
        document.getElementById("result").innerHTML = translations[language].alreadyAnswered;
    }

    updateInterfaceText();
}

function checkAnswer(selected) {
    const scenario = scenarios[language][currentScenario];
    const resultContainer = document.getElementById("result");

    if (answeredScenarios.has(currentScenario)) return;

    if (selected === scenario.correct) {
        resultContainer.innerHTML = `<strong>${translations[language].correctAnswer}</strong> ${scenario.explanation}`;
        correctAnswersCount++;
    } else {
        resultContainer.innerHTML = `<strong>${translations[language].wrongAnswer}</strong> ${scenario.explanation}`;
    }

    answeredScenarios.add(currentScenario);

    // Вмикаємо кнопки навігації після відповіді
    document.getElementById("navigation").style.display = "flex";

    // Якщо це останнє питання, відразу показати фінальний результат
    if (currentScenario === scenarios[language].length - 1) {
        showFinalScore();
    }
}

function showFinalScore() {
    // Сховати сценарій
    document.querySelector('.scenario').style.display = 'none';

    // Показати фінальний результат
    const finalScore = document.getElementById("final-score");
    finalScore.style.display = "block";

    // Вивести повідомлення про результат
    document.getElementById("score-message").innerText = 
        `${translations[language].finalScore} ${correctAnswersCount} / ${scenarios[language].length}`;
}

function goToPrevious() {
    if (currentScenario > 0) {
        currentScenario--;
        loadScenario();
        document.getElementById("result").innerHTML = "";
        document.getElementById("navigation").style.display = "none";
    }
}

function goToNext() {
    if (currentScenario < scenarios[language].length - 1) {
        currentScenario++;
        loadScenario();
        document.getElementById("result").innerHTML = "";
        document.getElementById("navigation").style.display = "none";
    }
}

function switchLanguage(lang) {
    language = lang;
    currentScenario = 0;
    correctAnswersCount = 0;
    answeredScenarios.clear();
    document.getElementById("final-score").style.display = "none";
    document.querySelector('.scenario').style.display = 'block';
    updateInterfaceText();
    loadScenario();
}

function restartQuiz() {
    currentScenario = 0;
    correctAnswersCount = 0;
    answeredScenarios.clear();
    document.getElementById("final-score").style.display = "none";
    document.querySelector('.scenario').style.display = 'block';
    loadScenario();
}

function updateInterfaceText() {
    document.title = translations[language].title;
    document.getElementById("scenario-title").innerText = translations[language].scenarioTitle;
    document.getElementById("prev-button").innerText = translations[language].prevButton;
    document.getElementById("next-button").innerText = translations[language].nextButton;
    document.getElementById("restart-button").innerText = translations[language].restartButton;
}

window.onload = loadScenario;
