/* =====================================
   CHAPTER 1 - VOLCANO EXPLORER
===================================== */
const volcanoFeatures = [
    "crater",
    "vent",
    "conduit",
    "magma"
];

let currentFeature = 0;

function updateTarget() {
    document.getElementById("targetFeature").textContent =
        volcanoFeatures[currentFeature]
            .replace("magma","Magma Chamber")
            .replace("crater","Crater")
            .replace("vent","Vent")
            .replace("conduit","Conduit");
}

function checkFeature(selected){

    const target = volcanoFeatures[currentFeature];

    if(selected === target){

        document.getElementById("gameResult").innerHTML =
            "✅ Correct!";

        currentFeature++;

        if(currentFeature >= volcanoFeatures.length){

            document.getElementById("gameResult").innerHTML =
                "🎉 Excellent! You identified all volcano features.";

            document.getElementById("targetFeature").textContent =
                "Completed";

            return;
        }

        setTimeout(()=>{
            updateTarget();
            document.getElementById("gameResult").innerHTML="";
        },1000);

    } else {

        document.getElementById("gameResult").innerHTML =
            "❌ Try again.";
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    updateTarget();
});

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
