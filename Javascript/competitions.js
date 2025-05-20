// Onglets des systèmes de qualification
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
    
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

const teamCards = document.querySelectorAll('.team-card');
const simulateBtn = document.getElementById('simulateBtn');
const simulatorResults = document.getElementById('simulatorResults');
let selectedTeam = null;

if (teamCards.length && simulateBtn) {
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
        
            teamCards.forEach(c => c.classList.remove('selected'));
            
            card.classList.add('selected');
            selectedTeam = card.getAttribute('data-team');
            
            simulateBtn.removeAttribute('disabled');
        });
    });

    simulateBtn.addEventListener('click', () => {
        if (!selectedTeam) return;
        
       
        const resultTitle = document.querySelector('.result-title');
        if (resultTitle) {
            resultTitle.textContent = `Analyse: ${document.querySelector(`.team-card[data-team="${selectedTeam}"] .team-name`).textContent}`;
        }
        
    
        if (simulatorResults) {
            simulatorResults.classList.add('active');
            
            
            simulatorResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}


const chartOptions = document.querySelectorAll('input[name="chartView"]');

if (chartOptions.length) {
    chartOptions.forEach(option => {
        option.addEventListener('change', () => {
            console.log(`Vue du graphique changée pour: ${option.id}`);
        });
    });
}