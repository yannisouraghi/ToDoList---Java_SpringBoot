

const showModalButton = document.getElementById("modalButton");
const dialog = document.querySelector("dialog");

showModalButton.addEventListener('click', () => {
    console.log('show modal');
    dialog.showModal();
});

const closeModalButton = document.getElementById('close-modal');

closeModalButton.addEventListener('click', () => {
    dialog.close();
});

async function addTask() {
    const task = {
        description: document.getElementById('description').value,
        dueDate: document.getElementById('dueDate').value,
        status: 'Pending'
    };

    const response = await fetch('/tasks/addtask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    if (response.ok) {
        alert('Tâche ajoutée avec succès');
        dialog.close();
        console.log(response);
    } else {
        alert('Erreur lors de l\'ajout de la tâche');
    }
}
