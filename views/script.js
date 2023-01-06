const characterList = document.getElementById('character-list-characters');

characterRows.forEach(row => {
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

const characterSliders = [...document.getElementsByClassName('character-prmotion-slider-input')];
characterSliders.forEach((slider) => {
    slider.addEventListener('input', e => {
        console.log(e.target.value);
    });
});
