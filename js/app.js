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
