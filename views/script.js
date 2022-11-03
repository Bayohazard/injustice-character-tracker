const characterListTableBody = document.querySelector('#character-list tbody');

function updateTableOpacity() {
    const characterListCheckboxes = document.querySelectorAll('#character-list tbody tr input.checkbox');

    characterListCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.closest('tr').classList.remove('faded');
        } else {
            checkbox.closest('tr').classList.add('faded');
        }
    });
}

document.addEventListener('DOMContentLoaded', updateTableOpacity);
characterListTableBody.addEventListener('change', updateTableOpacity);
