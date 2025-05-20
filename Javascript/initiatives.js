const dots = document.querySelectorAll('.slider-dots .dot');
const slides = document.querySelectorAll('.featured-slide');
let currentSlide = 0;

function showSlide(n) {
    if (!slides.length) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

if (dots.length && slides.length) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });


    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}


const filterButtons = document.querySelectorAll('.filter-button');
const initiativeCards = document.querySelectorAll('.initiative-card');

if (filterButtons.length && initiativeCards.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
        
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            
            initiativeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}


const programTabs = document.querySelectorAll('.program-tab');
const programContents = document.querySelectorAll('.program-content');

if (programTabs.length && programContents.length) {
    programTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            programTabs.forEach(t => t.classList.remove('active'));
            programContents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            const programId = tab.getAttribute('data-program');
            document.getElementById(programId).classList.add('active');
        });
    });
}


const suggestionForm = document.getElementById('suggestionForm');

if (suggestionForm) {
    suggestionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        alert('Merci pour votre suggestion ! Elle a été enregistrée et sera examinée par notre équipe.');
        suggestionForm.reset();
    });
}