document.addEventListener('DOMContentLoaded', (event) => {
    const clienteSelect = document.getElementById('clienteSelect');
    const jazigo = document.getElementById('jazigo');
    const saf = document.getElementById('saf');

    clienteSelect.addEventListener('change', (event) => {
        if (clienteSelect.value === '688') {
            jazigo.removeAttribute('readonly');
            jazigo.setAttribute('required', 'required');
            saf.removeAttribute('readonly');
            saf.setAttribute('required', 'required');
        } else {
            jazigo.setAttribute('readonly', 'readonly');
            jazigo.removeAttribute('required');
            saf.setAttribute('readonly', 'readonly');
            saf.removeAttribute('required');
        }
    });
});