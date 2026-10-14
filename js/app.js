/* =====================================
   CHAPTER 1 - VOLCANO EXPLORER
===================================== */
function checkMatchGame(){

    let score = 0;

    if(document.getElementById("crater").value === "A"){
        score++;
    }

    if(document.getElementById("vent").value === "B"){
        score++;
    }

    if(document.getElementById("conduit").value === "C"){
        score++;
    }

    if(document.getElementById("magma").value === "D"){
        score++;
    }

    const result =
        document.getElementById("matchResult");

    if(score === 4){

        result.innerHTML =
        result.innerHTML = `
<h4>🎉 Excellent! Score: 4 / 4</h4>

<div class="component-review">

<p><strong>A – Crater</strong><br>
The crater is the bowl-shaped opening at the summit where volcanic materials such as lava, ash, and gases are released.</p>

<p><strong>B – Vent</strong><br>
The vent is the surface opening through which magma, gases, and volcanic ash travel to reach the surface.</p>

<p><strong>C – Conduit</strong><br>
The conduit is the main underground pathway that transports magma from the magma chamber toward the surface.</p>

<p><strong>D – Magma Chamber</strong><br>
The magma chamber is a large underground reservoir where molten rock accumulates before moving upward toward an eruption.</p>

</div>
`;

    }else{

        result.innerHTML =
        "✅ Score: " +
        score +
        " / 4. Try again!";
    }
}

/* ==========================
   FINAL QUIZ
========================== */

const qs = [

[
"When a change occurs and triggers a chain reaction that causes the original change to continuously accelerate and become increasingly intense, what is this effect called?",
[
"Positive Feedback: Further accelerates and enhances the original change.",
"Negative Feedback: Tries to weaken or counteract the change, restoring the system to balance."
],
0
],

[
"When rising magma cools, crystallizes, and partially blocks the conduit, what physical change occurs inside the mountain?",
[
"Pressure will be released, and volcanic activity will safely stop.",
"Pressure will be trapped inside and continue to build up, leading to ground deformation/uplift and rock fracturing.",
"The volcano will contract inward, and the surface temperature will drop rapidly."
],
1
],

[
"In the 'instant pot model,' what two monitoring signals prior to a volcanic eruption correspond to the bulging of the lid and the cracking of the pot body, respectively?",
[
"Rise in surface temperature, release of volcanic gases",
"Ground uplift (deformation), frequent micro-earthquakes",
"Drop in hot spring water levels, landslides"
],
1
]

];

const quizContainer =
document.getElementById("quizApp");

if (quizContainer) {

    let html = "";

    qs.forEach((q, i) => {

        html += `
        <div class="quiz-question">

            <p><strong>Question ${i + 1}</strong></p>

            <p>${q[0]}</p>
        `;

        q[1].forEach((option, j) => {

            html += `
            <label>

                <input
                    type="radio"
                    name="q${i}"
                    value="${j}">

                ${option}

            </label>

            <br><br>
            `;
        });

        html += `</div><hr>`;
    });

    html += `
        <button onclick="gradeQuiz()">
            Submit Quiz
        </button>

        <div id="quizResult"></div>
    `;

    quizContainer.innerHTML = html;
}

function gradeQuiz() {

    let score = 0;

    qs.forEach((q, i) => {

        const answer =
        document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (
            answer &&
            parseInt(answer.value) === q[2]
        ) {
            score++;
        }

    });

    let feedback = "";

    if (score === 3) {

        feedback =
        "🌋 Excellent! You have mastered the key forecasting concepts.";

    } else if (score === 2) {

        feedback =
        "✅ Good work. Review the chapters and try again for full marks.";

    } else {

        feedback =
        "📚 Consider revisiting the chapters before retaking the quiz.";

    }

    document.getElementById(
        "quizResult"
    ).innerHTML = `
        <div class="chapter-summary">

            <h3>Quiz Results</h3>

            <p>
                Score:
                <strong>${score}/3</strong>
            </p>

            <p>
                ${feedback}
            </p>

        </div>
    `;
}

/* ==========================
   CHAPTER 2
   MONITORING MANAGER
========================== */

let budget = 100;

const selectedInstruments = [];

const instrumentNames = {

    seismo:"Seismometer",
    gps:"GPS Station",
    gas:"Gas Sensor",
    thermal:"Thermal Camera",
    satellite:"Satellite Observation"

};

function buyInstrument(type,cost){

    if(selectedInstruments.includes(type)){

        return;

    }

    if(budget < cost){

        alert(
            "Not enough monitoring credits."
        );

        return;
    }

    budget -= cost;

    selectedInstruments.push(type);

    document.getElementById(
        "budgetValue"
    ).innerText = budget;

    const li =
        document.createElement("li");

    li.innerText =
        instrumentNames[type];

    document
        .getElementById(
            "selectedInstruments"
        )
        .appendChild(li);

}

function analyzeVolcano(){

    const results =
        document.getElementById(
            "monitoringResults"
        );

    let signals = [];

    if(selectedInstruments.includes("seismo")){
        signals.push(
            "Increasing earthquake activity detected."
        );
    }

    if(selectedInstruments.includes("gps")){
        signals.push(
            "Ground uplift detected."
        );
    }

    if(selectedInstruments.includes("gas")){
        signals.push(
            "Volcanic gas emissions elevated."
        );
    }

    if(selectedInstruments.includes("thermal")){
        signals.push(
            "Surface temperatures increasing."
        );
    }

    if(selectedInstruments.includes("satellite")){
        signals.push(
            "Satellite confirms regional changes."
        );
    }

    if(selectedInstruments.length >= 3){

        results.innerHTML = `

        <div class="result-success">

            <h4>
            ✅ Strong Monitoring Network
            </h4>

            <p>
            Observations collected:
            </p>

            <ul>
                ${signals.map(
                    s => `<li>${s}</li>`
                ).join("")}
            </ul>

            <p>
            Scientists are more confident when
            multiple independent monitoring
            signals support the same interpretation.
            </p>

            <strong>
            Confidence Level: High
            </strong>

            <br><br>

            <button onclick="restartMonitoringGame()">
                🔄 Play Again
            </button>

        </div>

        `;

    }else{

        results.innerHTML = `

        <div class="result-warning">

            <h4>
            ⚠️ Limited Monitoring Information
            </h4>

            <p>
            Observations collected:
            </p>

            <ul>
                ${signals.map(
                    s => `<li>${s}</li>`
                ).join("")}
            </ul>

            <p>
            One or two instruments provide useful information,
            but scientists usually need multiple monitoring methods
            to understand volcanic activity.
            </p>

            <strong>
            Confidence Level: Low
            </strong>

            <br><br>

            <button onclick="restartMonitoringGame()">
                🔄 Play Again
            </button>

        </div>

        `;

    }

    const btn =
        document.getElementById(
            "analyzeBtn"
        );

    if(btn){

        btn.style.display =
            "none";

    }

}

function restartMonitoringGame(){

    budget = 100;

    selectedInstruments.length = 0;

    document.getElementById(
        "budgetValue"
    ).innerText = "100";

    document.getElementById(
        "selectedInstruments"
    ).innerHTML = "";

    document.getElementById(
        "monitoringResults"
    ).innerHTML = "";

    const btn =
        document.getElementById(
            "analyzeBtn"
        );

    if(btn){

        btn.style.display =
            "inline-block";

    }

}
        </div>

        `;
    }

}


/* =====================================
   CHAPTER 3
   VOLCANO STABILITY CHALLENGE
===================================== */

function updateSystem(){

    const magma =
        parseInt(
            document.getElementById(
                "magmaSlider"
            ).value
        );

    const gas =
        parseInt(
            document.getElementById(
                "gasSlider"
            ).value
        );

    const conduit =
        parseInt(
            document.getElementById(
                "conduitSlider"
            ).value
        );

    const pressure =
        Math.max(
            0,
            Math.round(
                magma
                - gas * 0.4
                - conduit * 0.3
            )
        );

    const earthquakes =
        Math.max(
            0,
            Math.round(
                pressure / 10
            )
        );

    const deformation =
        Math.max(
            0,
            Math.round(
                pressure * 0.12
            )
        );

    const temperature =
        Math.round(
            120 +
            magma * 1.2
        );

    document.getElementById(
        "pressureValue"
    ).innerText =
        pressure;

    document.getElementById(
        "earthquakeValue"
    ).innerText =
        earthquakes +
        " events/hr";

    document.getElementById(
        "deformationValue"
    ).innerText =
        deformation +
        " cm uplift";

    document.getElementById(
        "temperatureValue"
    ).innerText =
        temperature +
        "°C";

}

function evaluateVolcano(){

    const pressure =
        parseInt(
            document.getElementById(
                "pressureValue"
            ).innerText
        );

    const earthquakes =
        parseInt(
            document.getElementById(
                "earthquakeValue"
            ).innerText
        );

    const deformation =
        parseInt(
            document.getElementById(
                "deformationValue"
            ).innerText
        );

    const temperature =
        parseInt(
            document.getElementById(
                "temperatureValue"
            ).innerText
        );

    let result = "";

    if(
        pressure < 60 &&
        earthquakes < 5 &&
        deformation < 8 &&
        temperature < 220
    ){

        document.getElementById(
            "statusValue"
        ).innerText =
        "🟢 Stable";

        result = `
        <div class="success-box">

            <h4>
            🎉 Volcano Stabilized
            </h4>

            <p>
            Excellent work.
            Gas release and conduit openness
            prevented excessive pressure buildup.
            </p>

            <p>
            This demonstrates how negative
            feedback processes can stabilize
            volcanic systems.
            </p>

        </div>
        `;

    }
    else{

        document.getElementById(
            "statusValue"
        ).innerText =
        "🔴 Significant Unrest";

        result = `
        <div class="warning-box2">

            <h4>
            🌋 Significant Unrest
            </h4>

            <p>
            Pressure remained elevated.
            Multiple monitoring indicators
            suggest increasing volcanic activity.
            </p>

            <p>
            This demonstrates how positive
            feedback can amplify unrest.
            </p>

        </div>
        `;

    }

    document.getElementById(
        "pressureMessage"
    ).innerHTML =
        result;
}

document.addEventListener(
    "DOMContentLoaded",
    ()=>{
        updateSystem();
    }
);

/* ==========================
   CHAPTER 4
   FORECASTING & UNCERTAINTY
========================== */

const scenarios = [

{
    title:"Scenario 1",

    answer:"background",

    data:[
        "⚡ Earthquakes: Low",
        "🌋 Gas Emissions: Normal",
        "📏 Ground Deformation: Stable",
        "🌡 Temperature: Normal"
    ],

    explanation:
    "These observations suggest normal background activity."
},

{
    title:"Scenario 2",

    answer:"elevated",

    data:[
        "⚡ Earthquakes: Increasing",
        "🌋 Gas Emissions: Elevated",
        "📏 Ground Inflation: Moderate",
        "🌡 Temperature: Increasing"
    ],

    explanation:
    "Multiple monitoring signals suggest increasing unrest."
},

{
    title:"Scenario 3",

    answer:"unrest",

    data:[
        "⚡ Frequent Earthquake Swarms",
        "🌋 High Gas Emissions",
        "📏 Rapid Ground Deformation",
        "🌡 Strong Thermal Anomaly"
    ],

    explanation:
    "Several indicators point toward significant volcanic unrest."
}

];

let currentScenario = 0;
let scenarioScore = 0;
let scenarioAnswered = false;

function loadScenario(){

    const title =
        document.getElementById(
            "scenarioTitle"
        );

    const data =
        document.getElementById(
            "scenarioData"
        );

    if(!title || !data){

        console.error(
            "Scenario elements not found"
        );

        return;
    }

    const s =
        scenarios[currentScenario];

    title.innerText =
        s.title;

    data.innerHTML =
        s.data.map(
            item =>
            `<li>${item}</li>`
        ).join("");

}

function checkScenario(choice){

    if(scenarioAnswered){
        return;
    }

    scenarioAnswered = true;

    const s =
        scenarios[currentScenario];

    const feedback =
        document.getElementById(
            "scenarioFeedback"
        );

    if(choice === s.answer){

        scenarioScore++;

        document.getElementById(
            "scenarioScore"
        ).innerText =
            scenarioScore;

        feedback.innerHTML =
        `
        <div class="result-success">

            <h4>
            ✅ Good Assessment
            </h4>

            <p>
            ${s.explanation}
            </p>

            <button onclick="nextScenario()">
                Next Scenario →
            </button>

        </div>
        `;

    }
    else{

        feedback.innerHTML =
        `
        <div class="result-warning">

            <h4>
            ❌ Not Quite
            </h4>

            <p>
            ${s.explanation}
            </p>

            <p>
            Forecasts require interpretation of multiple signals.
            No single observation provides certainty.
            </p>

            <button onclick="nextScenario()">
                Next Scenario →
            </button>

        </div>
        `;
    }

}

function nextScenario(){

    currentScenario++;

    scenarioAnswered = false;

    document.getElementById(
        "scenarioFeedback"
    ).innerHTML = "";

    if(
        currentScenario >=
        scenarios.length
    ){

        finishScenarioGame();

        return;
    }

    loadScenario();
}

function finishScenarioGame(){

    const card =
        document.getElementById(
            "scenarioCard"
        );

    card.innerHTML = `

        <h3>
            🎉 Forecasting Challenge Complete
        </h3>

        <p>
            Final Score:
            <strong>
                ${scenarioScore}/3
            </strong>
        </p>

        <p>
            Scientists combine multiple observations,
            expert interpretation and uncertainty
            when assessing volcanic activity.
        </p>

        <p>
            Forecasts communicate changing
            probabilities rather than exact dates.
        </p>

        <button onclick="restartScenarioGame()">
            🔄 Play Again
        </button>

    `;

    const buttons =
        document.querySelector(
            ".scenario-buttons"
        );

    if(buttons){

        buttons.style.display =
            "none";

    }

}

function restartScenarioGame(){

    currentScenario = 0;

    scenarioScore = 0;

    scenarioAnswered = false;

    document.getElementById(
        "scenarioScore"
    ).innerText =
        "0";

    document.getElementById(
        "scenarioCard"
    ).innerHTML = `

        <h4 id="scenarioTitle">
            Scenario 1
        </h4>

        <ul id="scenarioData"></ul>

    `;

    document.getElementById(
        "scenarioFeedback"
    ).innerHTML =
        "";

    const buttons =
        document.querySelector(
            ".scenario-buttons"
        );

    if(buttons){

        buttons.style.display =
            "flex";

    }

    loadScenario();

}
