// @ts-check

const contentContainer = document.getElementById('content');

let fields = [
    'circle', // field 0
    null, // field 1
    'circle', // field 2
    null, // field 3
    null, // field 4
    null, // field 5
    'cross', // field 6
    'cross', // field 7
    null, // field 8
];

function render() {
    // Erzeugen Sie eine HTML-Tabelle
    const table = document.createElement('table');

    // Schleife durch die Spielfelder
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const fieldIndex = i * 3 + j;

            // Setzen Sie den Inhalt der Zelle basierend auf dem Wert im Feld-Array
            if (fields[fieldIndex] === 'circle') {
                cell.textContent = 'O';
            } else if (fields[fieldIndex] === 'cross') {
                cell.textContent = 'X';
            }

            // Fügen Sie die Zelle zur Zeile hinzu
            row.appendChild(cell);
        }
        // Fügen Sie die Zeile zur Tabelle hinzu
        table.appendChild(row);
    }

    // Löschen Sie den vorherigen Inhalt des contentContainers
    contentContainer.innerHTML = '';

    // Fügen Sie die Tabelle zum contentContainer hinzu
    contentContainer.appendChild(table);
}

function init() {
    render();
}

