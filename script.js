let currentScenario = 0;
let language = 'uk'; // default language

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
        }
        // Додайте інші сценарії українською мовою
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
        }
        // Додайте інші сценарії німецькою мовою
    ]
};

function loadScenario() {
    const scenario = scenarios[language][currentScenario];
    document.getElementById("question").innerText = scenario.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    scenario.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected) {
    const scenario = scenarios[language][currentScenario];
    const resultContainer = document.getElementById("result");
    if (selected === scenario.correct) {
        resultContainer.innerHTML = `<p><strong>Вірна відповідь!</strong> ${scenario.explanation}</p>`;
    } else {
        resultContainer.innerHTML = `<p><strong>Неправильна відповідь.</strong> ${scenario.explanation}</p>`;
    }
    document.getElementById("navigation").style.display = "block";
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
    loadScenario();
    document.getElementById("result").innerHTML = "";
    document.getElementById("navigation").style.display = "none";
}

window.onload = () => {
    document.getElementById("language-uk").addEventListener("click", () => switchLanguage('uk'));
    document.getElementById("language-de").addEventListener("click", () => switchLanguage('de'));
    loadScenario();
};
