const mapPoints = document.querySelectorAll('.map-point');
const academyPopup = document.getElementById('academyPopup');
const popupClose = document.querySelector('.popup-close');


const academies = {
    clairefontaine: {
        name: "INF Clairefontaine",
        country: " France",
        foundation: " 1988",
        type: " Centre National",
        budget: " 15 millions €",
        description: "L'INF Clairefontaine est le centre technique national du football français. Il accueille les meilleurs jeunes talents du pays et leur offre un encadrement de haut niveau pour développer leur potentiel.",
        success: "Joueurs formés: Kylian Mbappé, Thierry Henry, Nicolas Anelka, Louis Saha..."
    },
    lamasiabarcelone: {
        name: "La Masia - FC Barcelone",
        country: " Espagne",
        foundation: " 1979",
        type: " Club",
        budget: " 20 millions €",
        description: "La Masia est l'une des académies les plus réputées au monde, connue pour son style de jeu distinctif et sa philosophie de formation. Elle a produit certains des plus grands joueurs de l'histoire moderne.",
        success: "Joueurs formés: Lionel Messi, Xavi Hernández, Andrés Iniesta, Carles Puyol..."
    },
    juventus: {
        name: "Juventus Academy",
        country: " Italie",
        foundation: " 1982",
        type: " Club Premium",
        budget: " 18 millions €",
        description: "L'académie de la Juventus est reconnue pour sa rigueur tactique et son excellence défensive. Elle dispose d'installations ultramodernes et d'un staff technique de haut niveau.",
        success: "Joueurs formés: Alessandro Del Piero, Claudio Marchisio, Paolo Montero..."
    },
    ajax: {
        name: "Ajax Academy",
        country: " Pays-Bas",
        foundation: " 1900",
        type: " Club",
        budget: " 12 millions €",
        description: "Peut-être la plus célèbre académie au monde, l'Ajax est réputée pour sa philosophie de jeu offensive et sa capacité à produire des talents techniques exceptionnels.",
        success: "Joueurs formés: Johan Cruyff, Dennis Bergkamp, Edgar Davids, Wesley Sneijder..."
    },
    diambarsenegal: {
        name: "Académie Diambars",
        country: " Sénégal",
        foundation: " 2003",
        type: " ONG",
        budget: " 1.5 millions €",
        description: "Fondée par Patrick Vieira et d'autres anciens joueurs, Diambars combine éducation scolaire et formation footballistique de qualité pour offrir des opportunités aux jeunes talents sénégalais.",
        success: "Joueurs formés: Idrissa Gueye, Kara Mbodji, Saliou Ciss..."
    },
    jomokenya: {
        name: "JMJ Academy",
        country: " Kenya",
        foundation: " 2011",
        type: " Privée",
        budget: " 0.8 millions €",
        description: "Une des rares académies structurées en Afrique de l'Est, la JMJ Academy tente de pallier le manque d'infrastructures dans la région tout en offrant une éducation complète.",
        success: "Joueurs formés: Michael Olunga, Eric Johanna, plusieurs joueurs en ligue locale..."
    }
};


if (mapPoints.length) {
    const popupTitle = document.querySelector('.popup-title');
    const popupImage = document.querySelector('.popup-image img');
    const popupCountry = document.querySelector('.popup-info p:nth-child(1) strong').nextSibling;
    const popupFoundation = document.querySelector('.popup-info p:nth-child(2) strong').nextSibling;
    const popupType = document.querySelector('.popup-info p:nth-child(3) strong').nextSibling;
    const popupBudget = document.querySelector('.popup-info p:nth-child(4) strong').nextSibling;
    const popupDescription = document.querySelector('.popup-description p');
    const popupSuccess = document.querySelector('.success-stories p');
    
    mapPoints.forEach(point => {
        point.addEventListener('click', () => {
            const academyId = point.getAttribute('data-academy');
            if (academies[academyId]) {
                const academy = academies[academyId];
                
                
                popupTitle.textContent = academy.name;
                popupCountry.textContent = academy.country;
                popupFoundation.textContent = academy.foundation;
                popupType.textContent = academy.type;
                popupBudget.textContent = academy.budget;
                popupDescription.textContent = academy.description;
                popupSuccess.textContent = academy.success;
                
            
                academyPopup.classList.add('active');
            }
        });
    });
}


if (popupClose) {
    popupClose.addEventListener('click', () => {
        academyPopup.classList.remove('active');
    });
}


const showAllCheckbox = document.getElementById('showAll');
const showPremiumCheckbox = document.getElementById('showPremium');
const showStandardCheckbox = document.getElementById('showStandard');

function updateMapPoints() {
    if (!showAllCheckbox || !showPremiumCheckbox || !showStandardCheckbox) return;
    
    const showAll = showAllCheckbox.checked;
    const showPremium = showPremiumCheckbox.checked;
    const showStandard = showStandardCheckbox.checked;
    
    mapPoints.forEach(point => {
        if (showAll) {
            point.style.display = 'block';
        } else {
            if (point.classList.contains('premium') && showPremium) {
                point.style.display = 'block';
            } else if (!point.classList.contains('premium') && showStandard) {
                point.style.display = 'block';
            } else {
                point.style.display = 'none';
            }
        }
    });
}

if (showAllCheckbox && showPremiumCheckbox && showStandardCheckbox) {
    showAllCheckbox.addEventListener('change', () => {
        if (showAllCheckbox.checked) {
            showPremiumCheckbox.checked = true;
            showStandardCheckbox.checked = true;
        }
        updateMapPoints();
    });

    showPremiumCheckbox.addEventListener('change', () => {
        showAllCheckbox.checked = showPremiumCheckbox.checked && showStandardCheckbox.checked;
        updateMapPoints();
    });

    showStandardCheckbox.addEventListener('change', () => {
        showAllCheckbox.checked = showPremiumCheckbox.checked && showStandardCheckbox.checked;
        updateMapPoints();
    });
}


const slider = document.querySelector('.comparison-slider');
const beforeDiv = document.querySelector('.comparison-before');
const handle = document.querySelector('.comparison-handle');
let isDown = false;

if (slider && beforeDiv && handle) {
    handle.addEventListener('mousedown', () => {
        isDown = true;
    });

    window.addEventListener('mouseup', () => {
        isDown = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        
        const sliderRect = slider.getBoundingClientRect();
        const x = e.clientX - sliderRect.left;
        const percent = (x / sliderRect.width) * 100;
        
        if (percent >= 0 && percent <= 100) {
            beforeDiv.style.width = `${percent}%`;
            handle.style.left = `${percent}%`;
        }
    });

    
    handle.addEventListener('touchstart', () => {
        isDown = true;
    });

    window.addEventListener('touchend', () => {
        isDown = false;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        
        const touch = e.touches[0];
        const sliderRect = slider.getBoundingClientRect();
        const x = touch.clientX - sliderRect.left;
        const percent = (x / sliderRect.width) * 100;
        
        if (percent >= 0 && percent <= 100) {
            beforeDiv.style.width = `${percent}%`;
            handle.style.left = `${percent}%`;
        }
    });
}


const shareStoryForm = document.getElementById('shareStoryForm');

if (shareStoryForm) {
    shareStoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        

        const formData = new FormData(shareStoryForm);
        console.log('Formulaire soumis avec les données suivantes:');
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        
        
        shareStoryForm.reset();
        alert('Merci pour votre témoignage ! Il sera examiné et publié prochainement.');
    });
}