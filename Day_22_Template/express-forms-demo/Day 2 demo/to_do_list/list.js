const toDoInput = document.getElementById('toDoInput');
const addButton = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');

addButton.addEventListener('click', () => {
    const taskText = toDoInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', () => {
            toDoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        toDoList.appendChild(listItem);
        toDoInput.value = '';
    }
});

toDoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
