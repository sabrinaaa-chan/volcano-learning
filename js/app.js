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
