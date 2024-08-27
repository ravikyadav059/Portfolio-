document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const screenText = document.getElementById('screen-text');
        const value = this.getAttribute('data-value');

        if (value === 'clear') {
            screenText.textContent = '';
        } else if (value === '=') {
            try {
                screenText.textContent = eval(screenText.textContent);
            } catch {
                screenText.textContent = 'Error';
            }
        } else {
            screenText.textContent += value;
        }
    });
});
