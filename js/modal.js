// This file contains the logic for the modal functionality, including opening and closing the modal, handling user input, and updating the performance dataset with new entries.

const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Add Performance Data</h2>
        <form id="performanceForm">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="before">Before Time:</label>
            <input type="number" id="before" required>
            <label for="after">After Time:</label>
            <input type="number" id="after" required>
            <label for="unit">Time Unit:</label>
            <select id="unit" required>
                <option value="seconds">Seconds</option>
                <option value="milliseconds">Milliseconds</option>
            </select>
            <button type="submit">Add</button>
        </form>
    </div>
`;

document.body.appendChild(modal);

const openModalButton = document.createElement('button');
openModalButton.className = 'open-modal';
openModalButton.innerText = '+';
document.body.appendChild(openModalButton);

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

const closeButton = modal.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

const performanceForm = document.getElementById('performanceForm');
performanceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const before = parseFloat(document.getElementById('before').value);
    const after = parseFloat(document.getElementById('after').value);
    const unit = document.getElementById('unit').value;

    performanceData.push({ name, before, after, unit });

    // If this is a negative improvement (after > before), add a warning message
    if (after > before) {
        const alertElement = document.createElement('div');
        alertElement.className = 'alert';
        alertElement.textContent = 'Note: This metric shows slower performance after changes.';
        alertElement.style.color = '#ff3b30';
        alertElement.style.marginBottom = '10px';
        alertElement.style.fontSize = '14px';

        // Insert the alert before the form closes
        performanceForm.insertAdjacentElement('afterend', alertElement);

        // Remove the alert after 5 seconds
        setTimeout(() => {
            alertElement.remove();
        }, 5000);
    }

    modal.style.display = 'none';
    performanceForm.reset();
    // Optionally, you can call a function to update the UI with the new data
});