// This file contains the main JavaScript logic for the performance dashboard. It handles data rendering, dynamic updates, and interactions with the performance metrics.

const performanceData = [
    {
        name: "SignIn",
        before: 3.52,
        after: 2.5,
        unit: "seconds"
    },
    {
        name: "getTripById",
        before: 30,
        after: 7.5,
        unit: "seconds"
    },
    {
        name: "getTripListings",
        before: 32,
        after: 7,
        unit: "seconds"
    },
    {
        name: "searchGlobally",
        before: 812,
        after: 385,
        unit: "milliseconds"
    },
    {
        name: "complexQuery",
        before: 250,
        after: 320,
        unit: "milliseconds"
    }
];

const perfGrid = document.getElementById('perfGrid');

// Function to render performance cards
function renderPerformanceCards() {
    perfGrid.innerHTML = '';
    performanceData.forEach((item, index) => {
        const improvementPercent = ((item.before - item.after) / item.before * 100).toFixed(1);
        const isNegativeImprovement = item.after > item.before;
        const card = document.createElement('div');
        card.className = 'perf-card fade-in';
        card.style.transitionDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <button class="delete-button" data-index="${index}">×</button>
            <h3 class="perf-title">${item.name}</h3>
            <div class="metrics">
                <div class="metric-column">
                    <div class="metric-label">Before</div>
                    <div class="metric-value">${item.before}<span class="metric-unit">${item.unit}</span></div>
                </div>
                <div class="metric-column">
                    <div class="metric-label">After</div>
                    <div class="metric-value">${item.after}<span class="metric-unit">${item.unit}</span></div>
                </div>
            </div>
            <div class="bar-container">
                <div class="bar" data-width="${(item.after / item.before) * 100}%" style="${isNegativeImprovement ? 'background-color: #ff3b30;' : ''}"></div>
            </div>
            <div class="improvement">
                <div class="improvement-value" style="${isNegativeImprovement ? 'color: #ff3b30;' : ''}">${isNegativeImprovement ? '↑' : '↓'} ${Math.abs(improvementPercent)}%</div>
                <div class="improvement-label">${isNegativeImprovement ? 'Slower response' : 'Faster response'}</div>
            </div>
        `;

        perfGrid.appendChild(card);
    });
}

// Function to open the modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to add new performance data
function addPerformanceData(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const before = parseFloat(document.getElementById('before').value);
    const after = parseFloat(document.getElementById('after').value);
    const unit = document.getElementById('unit').value;

    if (name && !isNaN(before) && !isNaN(after) && unit) {
        performanceData.push({ name, before, after, unit });
        renderPerformanceCards();
        closeModal();
    }
}

// Event listener for the "+" button
document.getElementById('addButton').addEventListener('click', openModal);

// Event listener for the modal form submission
document.getElementById('performanceForm').addEventListener('submit', addPerformanceData);

// Initial render of performance cards
renderPerformanceCards();