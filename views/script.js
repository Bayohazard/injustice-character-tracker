const characterList = document.getElementById('character-list-characters');
const characterRows = [...document.getElementsByClassName('character-row')];

characterRows.forEach((row) => {
    const overview = row.querySelector('.character-overview');

    overview.addEventListener('click', (e) => {
        const checkbox = row.querySelector('.character-obtained-checkbox');

        // Hide stats section if unchecking checkbox
        if (e.target.type === 'checkbox' && !checkbox.checked) {
            row.querySelector('.character-stats').classList.add('hide');
            row.classList.remove('character-row-expanded');
            return;
        }

        if (e.target.type === 'checkbox') {
            return;
        }

        if (checkbox.checked) {
            row.querySelector('.character-stats').classList.toggle('hide');
            row.classList.toggle('character-row-expanded');
        }
    });
})

const promotionDivs = [...document.getElementsByClassName('character-promotion')];
promotionDivs.forEach((div) => {
    const MAX_PROMOTIONS = 10;
    const MIN_PROMOTIONS = 0;
    const sliderInput = div.querySelector('.character-promotion-slider-input');
    const textInput = div.querySelector('.character-promotion-text-input');

    sliderInput.addEventListener('input', (e) => {
        textInput.value = e.target.value;
    });

    textInput.addEventListener('input', (e) => {
        const promotionValue = e.target.value;
        console.log(promotionValue);

        if (promotionValue === '') {
            sliderInput.value = MIN_PROMOTIONS;
            return;
        }

        if (promotionValue >= MIN_PROMOTIONS && promotionValue <= MAX_PROMOTIONS) {
            sliderInput.value = e.target.value;
        }
    });
});

const levelDivs = [...document.getElementsByClassName('character-level')];
levelDivs.forEach((div) => {
    const MAX_LEVEL = 60;
    const MIN_LEVEL = 1;
    const sliderInput = div.querySelector('.character-level-slider-input');
    const textInput = div.querySelector('.character-level-text-input');

    sliderInput.addEventListener('input', (e) => {
        textInput.value = e.target.value;
    });

    textInput.addEventListener('input', (e) => {
        const levelValue = e.target.value;

        if (levelValue === '') {
            sliderInput.value = MIN_LEVEL;
            return;
        }
        
        if (levelValue >= MIN_LEVEL && levelValue <= MAX_LEVEL) {
            sliderInput.value = e.target.value;
        }
    });
});
