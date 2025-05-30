const quizData = {
    questions: [
        {
            id: 'q1',
            question: 'À quel âge commence généralement la détection de talents en Europe ?',
            options: {
                a: '4-5 ans',
                b: '6-8 ans',
                c: '10-12 ans',
                d: '14-16 ans'
            },
            correct: 'b',
            explanation: 'En Europe, la détection précoce commence généralement entre 6 et 8 ans dans les académies structurées.'
        },
        {
            id: 'q2',
            question: 'Quel pourcentage de jeunes africains talentueux restent non détectés ?',
            options: {
                a: '45%',
                b: '60%',
                c: '75%',
                d: '85%'
            },
            correct: 'd',
            explanation: '85% des talents africains restent non détectés à cause du manque d\'infrastructures et de systèmes de détection.'
        },
        {
            id: 'q3',
            question: 'Combien l\'Europe a-t-elle de centres de formation comparé à l\'Afrique ?',
            options: {
                a: '5 fois plus',
                b: '10 fois plus',
                c: '15 fois plus',
                d: '20 fois plus'
            },
            correct: 'c',
            explanation: 'L\'Europe dispose de 15 fois plus de centres de formation que l\'Afrique, illustrant les inégalités d\'infrastructures.'
        },
        {
            id: 'q4',
            question: 'À quel âge Sadio Mané a-t-il quitté le Sénégal pour l\'Europe ?',
            options: {
                a: '14 ans',
                b: '16 ans',
                c: '18 ans',
                d: '20 ans'
            },
            correct: 'b',
            explanation: 'Sadio Mané a quitté le Sénégal à 16 ans pour poursuivre sa carrière en France.'
        },
        {
            id: 'q5',
            question: 'Quel est le principal avantage des académies européennes ?',
            options: {
                a: 'Seulement les équipements',
                b: 'Approche holistique (sport + éducation + médical)',
                c: 'Seulement l\'entraînement technique',
                d: 'Seulement les bourses d\'études'
            },
            correct: 'b',
            explanation: 'Les académies européennes offrent une approche holistique combinant formation sportive, éducation et suivi médical.'
        }
    ]
};

function calculateScore(userAnswers) {
    let score = 0;
    const results = [];

    quizData.questions.forEach(question => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = userAnswer === question.correct;

        if (isCorrect) {
            score++;
        }

        results.push({
            question: question.question,
            userAnswer: userAnswer ? question.options[userAnswer] : 'Non répondu',
            correctAnswer: question.options[question.correct],
            isCorrect: isCorrect,
            explanation: question.explanation
        });
    });

    return { score, total: quizData.questions.length, results };
}

function displayResults(results) {
    const answersDisplay = document.getElementById('answersDisplay');
    let html = '';

    results.results.forEach((result, index) => {
        const statusClass = result.isCorrect ? 'high' : 'low';
        const statusText = result.isCorrect ? 'Correct' : 'Incorrect';

        html += `
            <div class="stat-row">
                <div class="stat-label">Question ${index + 1}</div>
                <div class="stat-value ${statusClass}">${statusText}</div>
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: ${result.isCorrect ? '#e8f5e8' : '#ffeaea'}; border-radius: 5px;">
                <p><strong>Votre réponse :</strong> ${result.userAnswer}</p>
                <p><strong>Bonne réponse :</strong> ${result.correctAnswer}</p>
                <p><strong>Explication :</strong> ${result.explanation}</p>
            </div>
        `;
    });

    answersDisplay.innerHTML = html;
}

function getScoreMessage(score, total) {
    const percentage = (score / total) * 100;

    if (percentage === 100) {
        return 'Parfait ! Vous maîtrisez parfaitement les enjeux de formation dans le football mondial !';
    } else if (percentage >= 80) {
        return 'Excellent ! Vous avez une très bonne compréhension des inégalités de formation.';
    } else if (percentage >= 60) {
        return 'Bien ! Vous connaissez les bases, mais il y a encore des aspects à approfondir.';
    } else if (percentage >= 40) {
        return 'Passable. Nous vous encourageons à relire le contenu pour mieux comprendre les enjeux.';
    } else {
        return 'Il faut approfondir vos connaissances sur les inégalités dans la formation footballistique.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('formationQuiz');
    const resultsDiv = document.getElementById('quizResults');

    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(quizForm);
            const userAnswers = {};

            quizData.questions.forEach(question => {
                userAnswers[question.id] = formData.get(question.id);
            });

            const unanswered = quizData.questions.filter(q => !userAnswers[q.id]);

            if (unanswered.length > 0) {
                alert('Veuillez répondre à toutes les questions avant de soumettre le quiz.');
                return;
            }

            const results = calculateScore(userAnswers);
            const message = getScoreMessage(results.score, results.total);
            alert(`RÉSULTATS DU QUIZ

Votre Score : ${results.score}/${results.total} (${Math.round((results.score/results.total)*100)}%)

${message}

Les réponses détaillées s'affichent ci-dessous.`);

            displayResults(results);
            resultsDiv.style.display = 'block';
            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});

function resetQuiz() {
    const quizForm = document.getElementById('formationQuiz');
    const resultsDiv = document.getElementById('quizResults');

    if (quizForm) {
        quizForm.reset();
    }

    if (resultsDiv) {
        resultsDiv.style.display = 'none';
    }
}

window.FormationQuiz = {
    resetQuiz,
    quizData
};
