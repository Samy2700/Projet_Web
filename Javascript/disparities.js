// Real data for country comparisons - disparities.js
const countryData = {
    // Rich countries
    france: {
        name: "France",
        category: "rich",
        budget: 280,
        budgetUnit: "millions €",
        stadiums: 45,
        trainingCenters: 35,
        professionalClubs: 40,
        averageSalary: 28000,
        salaryUnit: "€ / mois",
        population: 67.97,
        fifaRanking: 2,
        youthPrograms: 850,
        femaleParticipation: 35
    },
    allemagne: {
        name: "Allemagne",
        category: "rich",
        budget: 320,
        budgetUnit: "millions €",
        stadiums: 52,
        trainingCenters: 42,
        professionalClubs: 36,
        averageSalary: 32000,
        salaryUnit: "€ / mois",
        population: 83.24,
        fifaRanking: 14,
        youthPrograms: 920,
        femaleParticipation: 42
    },
    espagne: {
        name: "Espagne",
        category: "rich",
        budget: 245,
        budgetUnit: "millions €",
        stadiums: 38,
        trainingCenters: 28,
        professionalClubs: 42,
        averageSalary: 24000,
        salaryUnit: "€ / mois",
        population: 47.35,
        fifaRanking: 8,
        youthPrograms: 760,
        femaleParticipation: 38
    },
    angleterre: {
        name: "Angleterre",
        category: "rich",
        budget: 450,
        budgetUnit: "millions €",
        stadiums: 48,
        trainingCenters: 38,
        professionalClubs: 92,
        averageSalary: 45000,
        salaryUnit: "€ / mois",
        population: 56.55,
        fifaRanking: 4,
        youthPrograms: 1200,
        femaleParticipation: 45
    },
    italie: {
        name: "Italie",
        category: "rich",
        budget: 195,
        budgetUnit: "millions €",
        stadiums: 35,
        trainingCenters: 25,
        professionalClubs: 60,
        averageSalary: 22000,
        salaryUnit: "€ / mois",
        population: 59.11,
        fifaRanking: 9,
        youthPrograms: 680,
        femaleParticipation: 32
    },
    bresil: {
        name: "Brésil",
        category: "rich",
        budget: 85,
        budgetUnit: "millions €",
        stadiums: 28,
        trainingCenters: 45,
        professionalClubs: 120,
        averageSalary: 8500,
        salaryUnit: "€ / mois",
        population: 215.31,
        fifaRanking: 5,
        youthPrograms: 2800,
        femaleParticipation: 28
    },
    argentine: {
        name: "Argentine",
        category: "rich",
        budget: 65,
        budgetUnit: "millions €",
        stadiums: 22,
        trainingCenters: 35,
        professionalClubs: 95,
        averageSalary: 4200,
        salaryUnit: "€ / mois",
        population: 45.81,
        fifaRanking: 1,
        youthPrograms: 1850,
        femaleParticipation: 25
    },

    // Poor countries
    haiti: {
        name: "Haïti",
        category: "poor",
        budget: 1.8,
        budgetUnit: "millions €",
        stadiums: 1,
        trainingCenters: 2,
        professionalClubs: 8,
        averageSalary: 380,
        salaryUnit: "€ / mois",
        population: 11.68,
        fifaRanking: 85,
        youthPrograms: 25,
        femaleParticipation: 8
    },
    rdcongo: {
        name: "RD Congo",
        category: "poor",
        budget: 3.2,
        budgetUnit: "millions €",
        stadiums: 3,
        trainingCenters: 4,
        professionalClubs: 12,
        averageSalary: 420,
        salaryUnit: "€ / mois",
        population: 95.89,
        fifaRanking: 67,
        youthPrograms: 180,
        femaleParticipation: 5
    },
    cameroun: {
        name: "Cameroun",
        category: "poor",
        budget: 4.5,
        budgetUnit: "millions €",
        stadiums: 2,
        trainingCenters: 6,
        professionalClubs: 15,
        averageSalary: 650,
        salaryUnit: "€ / mois",
        population: 27.91,
        fifaRanking: 49,
        youthPrograms: 120,
        femaleParticipation: 12
    },
    bangladesh: {
        name: "Bangladesh",
        category: "poor",
        budget: 2.1,
        budgetUnit: "millions €",
        stadiums: 2,
        trainingCenters: 3,
        professionalClubs: 10,
        averageSalary: 280,
        salaryUnit: "€ / mois",
        population: 166.3,
        fifaRanking: 184,
        youthPrograms: 45,
        femaleParticipation: 3
    },
    nepal: {
        name: "Népal",
        category: "poor",
        budget: 0.8,
        budgetUnit: "millions €",
        stadiums: 1,
        trainingCenters: 1,
        professionalClubs: 6,
        averageSalary: 180,
        salaryUnit: "€ / mois",
        population: 30.03,
        fifaRanking: 168,
        youthPrograms: 15,
        femaleParticipation: 2
    },
    bolivie: {
        name: "Bolivie",
        category: "poor",
        budget: 3.8,
        budgetUnit: "millions €",
        stadiums: 2,
        trainingCenters: 4,
        professionalClubs: 14,
        averageSalary: 520,
        salaryUnit: "€ / mois",
        population: 11.83,
        fifaRanking: 88,
        youthPrograms: 65,
        femaleParticipation: 15
    },
    nicaragua: {
        name: "Nicaragua",
        category: "poor",
        budget: 1.2,
        budgetUnit: "millions €",
        stadiums: 1,
        trainingCenters: 2,
        professionalClubs: 7,
        averageSalary: 320,
        salaryUnit: "€ / mois",
        population: 6.94,
        fifaRanking: 152,
        youthPrograms: 20,
        femaleParticipation: 6
    }
};

function updateComparison(country1Id, country2Id) {
    const country1 = countryData[country1Id];
    const country2 = countryData[country2Id];
    
    if (!country1 || !country2) return;

    // Update country headers
    document.querySelector('.comparison-grid .country-card:first-child .country-header').textContent = country1.name;
    document.querySelector('.comparison-grid .country-card:last-child .country-header').textContent = country2.name;

    // Update first country stats
    const firstCountryStats = document.querySelectorAll('.comparison-grid .country-card:first-child .stat-row');
    firstCountryStats[0].querySelector('.stat-value').textContent = `${country1.budget} ${country1.budgetUnit}`;
    firstCountryStats[1].querySelector('.stat-value').textContent = country1.stadiums;
    firstCountryStats[2].querySelector('.stat-value').textContent = country1.trainingCenters;
    firstCountryStats[3].querySelector('.stat-value').textContent = country1.professionalClubs;
    firstCountryStats[4].querySelector('.stat-value').textContent = `${country1.averageSalary} ${country1.salaryUnit}`;

    // Update second country stats
    const secondCountryStats = document.querySelectorAll('.comparison-grid .country-card:last-child .stat-row');
    secondCountryStats[0].querySelector('.stat-value').textContent = `${country2.budget} ${country2.budgetUnit}`;
    secondCountryStats[1].querySelector('.stat-value').textContent = country2.stadiums;
    secondCountryStats[2].querySelector('.stat-value').textContent = country2.trainingCenters;
    secondCountryStats[3].querySelector('.stat-value').textContent = country2.professionalClubs;
    secondCountryStats[4].querySelector('.stat-value').textContent = `${country2.averageSalary} ${country2.salaryUnit}`;

    // Update stat value classes based on comparison
    updateStatClasses(firstCountryStats, secondCountryStats, country1, country2);
    
    // Calculate and display ratios
    displayComparisons(country1, country2);
}

function updateStatClasses(stats1, stats2, country1, country2) {
    const comparisons = [
        country1.budget > country2.budget,
        country1.stadiums > country2.stadiums,
        country1.trainingCenters > country2.trainingCenters,
        country1.professionalClubs > country2.professionalClubs,
        country1.averageSalary > country2.averageSalary
    ];

    comparisons.forEach((country1Higher, index) => {
        const stat1 = stats1[index].querySelector('.stat-value');
        const stat2 = stats2[index].querySelector('.stat-value');
        
        stat1.className = `stat-value ${country1Higher ? 'high' : 'low'}`;
        stat2.className = `stat-value ${country1Higher ? 'low' : 'high'}`;
    });
}

function displayComparisons(country1, country2) {
    const budgetRatio = Math.round(country1.budget / country2.budget * 10) / 10;
    const stadiumRatio = Math.round(country1.stadiums / country2.stadiums * 10) / 10;
    const salaryRatio = Math.round(country1.averageSalary / country2.averageSalary * 10) / 10;

    // Update the stats banner with real ratios
    const statNumbers = document.querySelectorAll('.stats-container .stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = `${budgetRatio}×`;
        statNumbers[1].textContent = `${stadiumRatio}×`;
        statNumbers[2].textContent = `${salaryRatio}×`;
    }
}

// Initialize comparison form handler
document.addEventListener('DOMContentLoaded', function() {
    const comparisonForm = document.getElementById('comparisonForm');
    
    if (comparisonForm) {
        comparisonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const country1 = document.getElementById('country1').value;
            const country2 = document.getElementById('country2').value;
            
            if (country1 && country2) {
                updateComparison(country1, country2);
                document.getElementById('comparisonResults').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else {
                alert('Veuillez sélectionner deux pays pour effectuer la comparaison.');
            }
        });
    }
});

// Export for use in other files
window.CountryData = {
    data: countryData,
    updateComparison: updateComparison
};

