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
let missionTime = 30;
let stabilityScore = 100;
let missionRunning = false;

function startMission(){

    if(missionRunning){
        return;
    }

    missionRunning = true;

    missionTime = 30;
    stabilityScore = 100;

    updateVolcano();

    const timer = setInterval(()=>{

        missionTime--;

        document.getElementById(
            "missionTimer"
        ).innerText =
            missionTime;

        if(missionTime <= 0){

            clearInterval(timer);

            finishMission();

        }

    },1000);

    const events = [

        "⚠️ New magma pulse detected",

        "⚠️ Conduit partially blocked",

        "⚠️ Earthquake swarm detected",

        "✅ Gas release increased",

        "✅ New fracture allows gas escape"

    ];

    const eventLoop = setInterval(()=>{

        if(!missionRunning){

            clearInterval(
                eventLoop
            );

            return;
        }

        const event =

            events[
                Math.floor(
                    Math.random()
                    *
                    events.length
                )
            ];

        document.getElementById(
            "eventPanel"
        ).innerText =
            event;

    },5000);

}

function updateVolcano(){

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

    let pressure =

        magma
        -
        (gas * 0.3)
        -
        (conduit * 0.2);

    pressure =

        Math.max(
            0,
            Math.min(
                100,
                Math.round(
                    pressure
                )
            )
        );

    const earthquakes =
        Math.round(
            pressure / 10
        );

    const deformation =
        Math.round(
            pressure * 0.15
        );

    const temperature =
        90 +
        Math.round(
            magma * 0.8
        ) +
        Math.round(
            pressure * 0.4
        );

    const gasOutput =
        Math.round(
            gas * 0.8
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

    document.getElementById(
        "gasValue"
    ).innerText =
        gasOutput +
        " units";

    document.getElementById(
        "pressureFill"
    ).style.width =
        pressure + "%";

    let status = "";

    let interpretation = "";

    if(pressure < 30){

        status = "🟢 Stable";

        interpretation =
            "Gas escapes efficiently. Negative feedback helps stabilize the volcano.";

        document.getElementById(
            "pressureFill"
        ).style.background =
            "green";

    }

    else if(pressure < 70){

        status =
            "🟡 Elevated";

        interpretation =
            "Pressure is increasing. Scientists would monitor the volcano closely.";

        document.getElementById(
            "pressureFill"
        ).style.background =
            "gold";

    }

    else{

        status =
            "🔴 Significant Unrest";

        interpretation =
            "Pressure is very high. Earthquakes and ground deformation increase rapidly.";

        document.getElementById(
            "pressureFill"
        ).style.background =
            "red";

    }

    document.getElementById(
        "statusValue"
    ).innerText =
        status;

    document.getElementById(
        "pressureMessage"
    ).innerHTML = `

        <div class="concept-box">

            <strong>
            Observatory Interpretation
            </strong>

            <p>
            ${interpretation}
            </p>

        </div>

    `;

    if(missionRunning){

        if(
            pressure >= 30 &&
            pressure <= 60
        ){

            stabilityScore++;

        }
        else{

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
}

function finishMission(){

    missionRunning = false;

    let result = "";

    if(stabilityScore >= 90){

        result = `

        <div class="success-box">

            <h4>
                🎉 Mission Success
            </h4>

            <p>
                Final Score:
                ${stabilityScore}
            </p>

            <p>
                You maintained a stable volcanic system and prevented excessive pressure build-up.
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
                Pressure remained too high for too long, producing unrest conditions.
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

            updateVolcano();

        }

    }
);

/* =====================================
   CHAPTER 3 
===================================== */
function updateVolcano(){

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

    let pressure =
        magma
        - (gas * 0.3)
        - (conduit * 0.2);

    pressure =
        Math.max(
            0,
            Math.min(
              100,
              Math.round(pressure)
            )
        );

    document.getElementById(
        "pressureValue"
    ).innerText = pressure;

    let earthquakes = "";
    let deformation = "";
    let status = "";
    let message = "";

    if(pressure < 30){

        earthquakes = "Low";

        deformation = "Minimal";

        status = "🟢 Stable";

        message = `
        <div class="result-success">

            <h4>
            ✅ Stable Volcano
            </h4>

            <p>
            Gas escapes efficiently and pressure remains low.
            Negative feedback helps stabilize the system.
            </p>

        </div>
        `;

    }

    else if(pressure < 70){

        earthquakes =
            "Moderate";

        deformation =
            "Moderate";

        status =
            "🟡 Elevated";

        message = `
        <div class="result-warning">

            <h4>
            ⚠️ Elevated Activity
            </h4>

            <p>
            Pressure is building.
            Scientists would closely monitor
            additional signals.
            </p>

        </div>
        `;

    }

    else{

        earthquakes =
            "High";

        deformation =
            "Strong";

        status =
            "🔴 Unrest";

        message = `
        <div class="result-warning">

            <h4>
            🌋 Significant Unrest
            </h4>

            <p>
            High magma supply combined with
            insufficient gas release causes
            pressure to build rapidly.
            </p>

            <p>
            Earthquakes and deformation
            increase significantly.
            </p>

        </div>
        `;

    }

    document.getElementById(
        "earthquakeValue"
    ).innerText =
        earthquakes;

    document.getElementById(
        "deformationValue"
    ).innerText =
        deformation;

    document.getElementById(
        "statusValue"
    ).innerText =
        status;

    document.getElementById(
        "pressureMessage"
    ).innerHTML =
        message;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if(
            document.getElementById(
                "magmaSlider"
            )
        ){

            updateVolcano();

        }

    }
);
let missionTime = 30;
let stabilityScore = 100;
let missionRunning = false;

function startMission(){

    if(missionRunning) return;

    missionRunning = true;

    const timer = setInterval(()=>{

        missionTime--;

        document.getElementById(
            "missionTimer"
        ).innerText =
            missionTime;

        if(missionTime <= 0){

            clearInterval(timer);

            finishMission();

        }

    },1000);

    const events = [

        "⚠️ Magma pulse detected (+15 pressure)",

        "⚠️ Gas trapped beneath conduit (+10 pressure)",

        "⚠️ New earthquake swarm detected",

        "✅ Gas release increased naturally",

        "✅ Surface vent reopened"

    ];

    setInterval(()=>{

        const event =
            events[
                Math.floor(
                    Math.random()
                    *
                    events.length
                )
            ];

        document.getElementById(
            "eventPanel"
        ).innerText =
            event;

    },5000);

}
let missionTime = 30;
let stabilityScore = 100;
let missionRunning = false;

function startMission(){

    if(missionRunning){
        return;
    }

    missionRunning = true;

    missionTime = 30;
    stabilityScore = 100;

    updateVolcano();

    const timer = setInterval(()=>{

        missionTime--;

        document.getElementById(
            "missionTimer"
        ).innerText =
            missionTime;

        if(missionTime <= 0){

            clearInterval(timer);

            finishMission();

        }

    },1000);

    const events = [

        "⚠️ New magma pulse detected",

        "⚠️ Conduit partially blocked",

        "⚠️ Earthquake swarm detected",

        "✅ Gas release increased",

        "✅ New fracture allows gas escape"

    ];

    const eventLoop = setInterval(()=>{

        if(!missionRunning){

            clearInterval(
                eventLoop
            );

            return;
        }

        const event =

            events[
                Math.floor(
                    Math.random()
                    *
                    events.length
                )
            ];

        document.getElementById(
            "eventPanel"
        ).innerText =
            event;

    },5000);

}

function updateVolcano(){

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

    let pressure =

        magma
        -
        (gas * 0.3)
        -
        (conduit * 0.2);

    pressure =

        Math.max(
            0,
            Math.min(
                100,
                Math.round(
                    pressure
                )
            )
        );

    const earthquakes =
        Math.round(
            pressure / 10
        );

    const deformation =
        Math.round(
            pressure * 0.15
        );

    const temperature =
        90 +
        Math.round(
            magma * 0.8
        ) +
        Math.round(
            pressure * 0.4
        );

    const gasOutput =
        Math.round(
            gas * 0.8
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

    document.getElementById(
        "gasValue"
    ).innerText =
        gasOutput +
        " units";

    document.getElementById(
        "pressureFill"
    ).style.width =
        pressure + "%";

    let status = "";

    let interpretation = "";

    if(pressure < 30){

        status = "🟢 Stable";

        interpretation =
            "Gas escapes efficiently. Negative feedback helps stabilize the volcano.";

        document.getElementById(
            "pressureFill"
        ).style.background =
            "green";

    }

    else if(pressure < 70){

        status =
            "🟡 Elevated";

        interpretation =
            "Pressure is increasing. Scientists would monitor the volcano closely.";

        document.getElementById(
            "pressureFill"
        ).style.background =
            "gold";

    }

    else{

        status =
            "🔴 Significant Unrest";

        interpretation =
            "Pressure is very high. Earthquakes and ground deformation increase rapidly.";

        document.getElementById(
            "pressureFill"
        ).style.background =
            "red";

    }

    document.getElementById(
        "statusValue"
    ).innerText =
        status;

    document.getElementById(
        "pressureMessage"
    ).innerHTML = `

        <div class="concept-box">

            <strong>
            Observatory Interpretation
            </strong>

            <p>
            ${interpretation}
            </p>

        </div>

    `;

    if(missionRunning){

        if(
            pressure >= 30 &&
            pressure <= 60
        ){

            stabilityScore++;

        }
        else{

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
}

function finishMission(){

    missionRunning = false;

    let result = "";

    if(stabilityScore >= 90){

        result = `

        <div class="success-box">

            <h4>
                🎉 Mission Success
            </h4>

            <p>
                Final Score:
                ${stabilityScore}
            </p>

            <p>
                You maintained a stable volcanic system and prevented excessive pressure build-up.
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
                Pressure remained too high for too long, producing unrest conditions.
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

            updateVolcano();

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
