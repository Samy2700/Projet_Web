const comparisonForm = document.getElementById('comparisonForm');
const comparisonResults = document.getElementById('comparisonResults');

if (comparisonForm) {
    comparisonForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        comparisonResults.classList.add('active');
        
        
        comparisonResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
let currentSlide = 0;

function showSlide(n) {
    if (!testimonialSlides.length) return;
    
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;
    
    testimonialSlides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

if (prevTestimonial && nextTestimonial) {
    prevTestimonial.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextTestimonial.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 8000);
}


const questions = document.querySelectorAll('.quiz-question');
const progressBar = document.querySelector('.quiz-progress-bar');
const nextQuestionBtn = document.getElementById('nextQuestion');
const prevQuestionBtn = document.getElementById('prevQuestion');
const quizResults = document.getElementById('quizResults');
const restartQuizBtn = document.getElementById('restartQuiz');
let currentQuestion = 0;

function showQuestion(n) {
    if (!questions.length) return;
    
    questions.forEach(question => question.style.display = 'none');
    
    currentQuestion = n;
    questions[currentQuestion].style.display = 'block';
    
    if (progressBar) {
        progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    }
    
    if (prevQuestionBtn) {
        prevQuestionBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    }
    
    if (nextQuestionBtn) {
        if (currentQuestion === questions.length - 1) {
            nextQuestionBtn.textContent = 'Terminer';
        } else {
            nextQuestionBtn.textContent = 'Suivant';
        }
    }
}

if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            showQuestion(currentQuestion + 1);
        } else {
            questions.forEach(question => question.style.display = 'none');
            if (prevQuestionBtn) prevQuestionBtn.style.display = 'none';
            if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
            if (quizResults) quizResults.classList.add('active');
        }
    });
}

if (prevQuestionBtn) {
    prevQuestionBtn.addEventListener('click', () => {
        showQuestion(currentQuestion - 1);
    });
}

if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
        if (quizResults) quizResults.classList.remove('active');
        showQuestion(0);
        if (nextQuestionBtn) nextQuestionBtn.style.display = 'block';
    });
}


if (questions.length) {
    showQuestion(0);
}