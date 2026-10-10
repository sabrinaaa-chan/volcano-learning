/* =====================================
   CHAPTER 1 - VOLCANO EXPLORER
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const dragLabels =
        document.querySelectorAll(".drag-label");

    const dropSpots =
        document.querySelectorAll(".drop-spot");

    dragLabels.forEach(label => {

        label.addEventListener(
            "dragstart",
            e => {

                e.dataTransfer.setData(
                    "text/plain",
                    label.id
                );

            }
        );

    });

    dropSpots.forEach(spot => {

        spot.addEventListener(
            "dragover",
            e => {

                e.preventDefault();

            }
        );

        spot.addEventListener(
            "drop",
            e => {

                e.preventDefault();

                const draggedId =
                    e.dataTransfer.getData(
                        "text/plain"
                    );

                const answer =
                    spot.dataset.answer;

                if(draggedId === answer){

                    const item =
                        document.getElementById(
                            draggedId
                        );

                    spot.innerHTML =
                        item.innerText;

                    spot.style.background =
                        "#dff0e0";

                    item.remove();

                    checkVolcanoExplorer();

                } else {

                    document
                        .getElementById(
                            "volcanoFeedback"
                        )
                        .innerHTML =
                        "❌ Not quite. Try another location.";

                }

            }
        );

    });

});

function checkVolcanoExplorer(){

    const remaining =
        document.querySelectorAll(
            ".drag-label"
        );

    if(remaining.length === 0){

        document.getElementById(
            "volcanoFeedback"
        ).innerHTML = `

        <div class="chapter-summary">

            <h4>
             🎉 Volcano Explorer Complete
            </h4>

            <p>
             Excellent work! You identified:
            </p>

            <ul>
                <li>Crater</li>
                <li>Vent</li>
                <li>Conduit</li>
                <li>Magma Chamber</li>
            </ul>

            <p>
             Scientists must understand volcano structure before interpreting monitoring signals.
            </p>

            <strong>
                Score: 4 / 4
            </strong>

        </div>
        `;
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
