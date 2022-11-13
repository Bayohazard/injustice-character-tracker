const characterList = document.getElementById('character-list-characters');

characterList.addEventListener('click', (e) => {
    const classes = e.target.classList;
    let id = '';

    if (classes[0] === 'character-overview') {
        id = e.target.parentElement.id;
        console.log('1: ', id);
    }

    if (classes[0] === 'character-name') {
        id = e.target.parentElement.parentElement.parentElement.id;
        console.log('2: ', e.target.parentElement.parentElement.parentElement.id);
    }

    if (document.querySelector(`#${id} .character-obtained-checkbox`).checked) {
        document.querySelector(`#${id} .character-stats`).classList.toggle('hide');
        document.querySelector(`#${id}`).classList.toggle('character-row-expanded');
    }
});
