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
                    s=>`<li>${s}</li>`
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

        </div>

        `;
    }
    else{

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
                    s=>`<li>${s}</li>`
                ).join("")}
            </ul>

            <p>
            One or two instruments provide useful
            information, but scientists usually
            need multiple monitoring methods to
            understand volcanic activity.
            </p>

            <strong>
            Confidence Level: Low
            </strong>

        </div>

        `;
    }

}


/* =====================================
   CHAPTER 3
   VOLCANO CRISIS MANAGER
===================================== */

let pressure = 50;
let earthquakes = 4;
let deformation = 5;
let temperature = 180;

let missionTime = 30;
let stabilityScore = 100;
let missionRunning = false;

let gameLoop;
let eventLoop;

/* =====================
   START GAME
===================== */

function startMission(){

    console.log("Mission Started");

    if(missionRunning){
        return;
    }

    missionRunning = true;

    missionTime = 30;
    stabilityScore = 100;

    pressure = 50;
    earthquakes = 4;
    deformation = 5;
    temperature = 180;

    renderDashboard();

    const timerElement =
        document.getElementById(
            "missionTimer"
        );

    if(timerElement){
        timerElement.innerText = "30";
    }

    document.getElementById(
        "eventPanel"
    ).innerHTML =
    "🌋 Mission started. Monitor the volcano carefully.";

    clearInterval(gameLoop);
    clearInterval(eventLoop);

    gameLoop = setInterval(()=>{

        console.log(
            "Timer:",
            missionTime
        );

        missionTime--;

        if(timerElement){

            timerElement.innerText =
                missionTime;

        }

        updateSystem();

        if(missionTime <= 0){

            clearInterval(gameLoop);
            clearInterval(eventLoop);

            finishMission();

        }

    },1000);

    eventLoop = setInterval(()=>{

        randomEvent();

    },5000);

}

/* =====================
   RANDOM EVENTS
===================== */

function randomEvent(){

    const events = [

        {
            text:"⚠️ Magma Pulse Detected",
            pressure:15,
            temp:20
        },

        {
            text:"⚠️ Earthquake Swarm",
            pressure:5,
            earthquakes:3
        },

        {
            text:"⚠️ Gas Build-Up",
            pressure:10
        },

        {
            text:"✅ New Surface Crack",
            pressure:-10
        }

    ];

    const e =
    events[
        Math.floor(
            Math.random()*events.length
        )
    ];

    pressure += e.pressure || 0;
    earthquakes += e.earthquakes || 0;
    temperature += e.temp || 0;

    document.getElementById(
        "eventPanel"
    ).innerHTML =
    e.text;
}

/* =====================
   SYSTEM UPDATE
===================== */

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

    pressure += magma*0.15;
    pressure -= gas*0.08;
    pressure -= conduit*0.05;

    pressure =
    Math.max(
        0,
        Math.min(100,pressure)
    );

    earthquakes =
    Math.max(
        0,
        Math.round(pressure/12)
    );

    deformation =
    Math.max(
        0,
        Math.round(pressure*0.12)
    );

    temperature +=
        Math.round(
            magma*0.05
        );

    renderDashboard();

}

/* =====================
   DASHBOARD
===================== */

function renderDashboard(){

    document.getElementById(
        "pressureValue"
    ).innerText =
    Math.round(pressure);

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
    Math.round(temperature) +
    "°C";

    if(
        pressure >=30 &&
        pressure <=60
    ){

        stabilityScore += 1;

    }else{

        stabilityScore -= 2;

    }

    stabilityScore =
    Math.max(
        0,
        stabilityScore
    );

    document.getElementById(
        "scoreValue"
    ).innerText =
    stabilityScore;

}

/* =====================
   CONTROL BUTTONS
===================== */

function injectCooling(){

    temperature -= 25;

    pressure -= 5;

    renderDashboard();

}

function emergencyVenting(){

    pressure -= 15;

    earthquakes += 2;

    renderDashboard();

}

function sealFractures(){

    earthquakes -= 2;

    pressure += 10;

    renderDashboard();

}

/* =====================
   FINISH GAME
===================== */

function finishMission(){

    missionRunning = false;

    let result = "";

    if(
        pressure < 70 &&
        earthquakes < 8 &&
        deformation < 12 &&
        temperature < 260
    ){

        result = `
        <div class="success-box">

            <h4>
            🎉 Volcano Stabilized
            </h4>

            <p>
            Final Score:
            ${stabilityScore}
            </p>

            <p>
            Excellent work. You balanced the monitoring indicators successfully.
            </p>

        </div>
        `;

    }
    else{

        result = `
        <div class="warning-box2">

            <h4>
            🌋 Significant Unrest
            </h4>

            <p>
            Final Score:
            ${stabilityScore}
            </p>

            <p>
            At least one monitoring signal exceeded safe limits.
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

        if(
            document.getElementById(
                "magmaSlider"
            )
        ){

            renderDashboard();

        }

    }
);

/* ==========================
   CHAPTER 4
   SCENARIO DETECTIVE
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
    "These observations suggest background activity. Small changes are normal at many volcanoes."
},
{
    title:"Scenario 2",
    answer:"elevated",
    data:[
        "⚡ Earthquakes: Increasing",
        "🌋 Gas Emissions: Slightly Elevated",
        "📏 Ground Deformation: Moderate",
        "🌡 Temperature: Elevated"
    ],
    explanation:
    "Multiple monitoring signals are changing. Scientists would increase monitoring and investigation."
},
{
    title:"Scenario 3",
    answer:"unrest",
    data:[
        "⚡ Earthquakes: Frequent",
        "🌋 Gas Emissions: High",
        "📏 Ground Deformation: Rapid",
        "🌡 Strong Thermal Anomaly"
    ],
    explanation:
    "Several indicators show significant unrest. Scientists would closely monitor the volcano."
}
];

let currentScenario = 0;
let scenarioScore = 0;
let scenarioAnswered = false;

function loadScenario(){

    const s = scenarios[currentScenario];

    document.getElementById(
        "scenarioTitle"
    ).innerText = s.title;

    document.getElementById(
        "scenarioData"
    ).innerHTML =
    s.data.map(
        item => `<li>${item}</li>`
    ).join("");

}

function checkScenario(choice){

    if(scenarioAnswered){
        return;
    }

    scenarioAnswered = true;

    const s = scenarios[currentScenario];

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

        feedback.innerHTML = `
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

        feedback.innerHTML = `
        <div class="result-warning">

            <h4>
            ❌ Not Quite
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

    document.getElementById(
        "scenarioCard"
    ).innerHTML = `

    <h3>
        🎉 Scenario Detective Complete
    </h3>

    <p>
        Final Score:
        <strong>
        ${scenarioScore}/3
        </strong>
    </p>

    <p>
        Scientists compare multiple monitoring signals together.
    </p>

    <p>
        No single observation guarantees an eruption.
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
    ).innerText = "0";

    const buttons =
        document.querySelector(
            ".scenario-buttons"
        );

    if(buttons){

        buttons.style.display =
        "flex";

    }

    document.getElementById(
        "scenarioFeedback"
    ).innerHTML = "";

    loadScenario();

}

document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        if(
            document.getElementById(
                "scenarioCard"
            )
        ){

            loadScenario();

        }

    }
);
