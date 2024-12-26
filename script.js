// Tab Navigation
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabName ? 'block' : 'none';
    });
}

// Project Click
function openProject(projectId) {
    alert(`Open and display details for ${projectId}`);
}

// Password Protection for Editing Section
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = 'admin123'; // @TODO: Change this password to your own
    if (password === correctPassword) {
        document.getElementById('admin-area').classList.remove('hidden');
    } else {
        alert('Incorrect password!');
    }
}

// Add steps for project editing
function addStep() {
    const stepContainer = document.getElementById('steps-container');
    const stepInput = document.createElement('input');
    stepInput.placeholder = 'New step'; // @TODO: Modify placeholder text if needed
    stepContainer.appendChild(stepInput);
}
