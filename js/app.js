/* =====================================
   CHAPTER 1 - VOLCANO EXPLORER
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const draggables =
        document.querySelectorAll(".drag-item");

    const dropZones =
        document.querySelectorAll(".drop-zone");

    draggables.forEach(item => {

        item.addEventListener("dragstart", e => {

            e.dataTransfer.setData(
                "text/plain",
                item.id
            );

        });

    });

    dropZones.forEach(zone => {

        zone.addEventListener("dragover", e => {
            e.preventDefault();
        });

        zone.addEventListener("drop", e => {

            e.preventDefault();

            const draggedId =
                e.dataTransfer.getData(
                    "text/plain"
                );

            const correctAnswer =
                zone.dataset.answer;

            const feedback =
                document.getElementById(
                    "volcanoFeedback"
                );

            if (draggedId === correctAnswer) {

                const draggedElement =
                    document.getElementById(
                        draggedId
                    );

                zone.innerHTML =
                    "✅ " +
                    draggedElement.innerText;

                draggedElement.remove();

                feedback.innerHTML =
                    "Correct! Great job.";

                checkVolcanoExplorer();

            } else {

                feedback.innerHTML =
                    "❌ That component belongs somewhere else.";

            }

        });

    });

});


function checkVolcanoExplorer() {

    const remaining =
        document.querySelectorAll(
            ".drag-item"
        );

    if (remaining.length === 0) {

        document.getElementById(
            "volcanoFeedback"
        ).innerHTML = `

            <div class="game-success">

                <h4>
                    🎉 Volcano Explorer Complete
                </h4>

                <p>
                    You successfully identified:

                    <ul>
                        <li>Magma Chamber</li>
                        <li>Conduit</li>
                        <li>Vent</li>
                        <li>Crater</li>
                    </ul>

                </p>

                <p>
                    Scientists must understand
                    volcano structure before they
                    can interpret monitoring data.
                </p>

                <strong>
                    Score: 4 / 4
                </strong>

            </div>

        `;

    }

}
