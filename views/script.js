const characterList = document.getElementById('character-list-characters');

characterList.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
        const id = e.target.parentElement.parentElement.id;
        document.querySelector(`#${id} .character-stats`).classList.add('hide');
        document.querySelector(`#${id}`).classList.remove('character-row-expanded');
        return;
    }

    if (e.target.type === 'checkbox') {
        return;
    }

    const classes = e.target.classList;
    let id = '';

    if (classes[0] === 'character-overview') {
        id = e.target.parentElement.id;
    }

    if (classes[0] === 'character-name') {
        id = e.target.parentElement.parentElement.parentElement.id;
    }

    if (classes[0] === 'character-name-wrapper') {
        id = e.target.parentElement.parentElement.id;
    }

    if (document.querySelector(`#${id} .character-obtained-checkbox`).checked) {
        document.querySelector(`#${id} .character-stats`).classList.toggle('hide');
        document.querySelector(`#${id}`).classList.toggle('character-row-expanded');
    }
});
