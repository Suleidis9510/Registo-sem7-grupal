function hideAlert(alertId) {
    document.getElementById(alertId).classList.remove("show");
}

function resetAlerts() {
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");
}

function showAlertSuccess() {
    resetAlerts();
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    resetAlerts();
    document.getElementById("alert-danger").classList.add("show");
}
document.getElementById('registroForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password1').value;
    const repeatPassword = document.getElementById('password2').value;
    const termsAccepted = document.getElementById('terminos').checked;

    if (!nombre || !apellido || !email || !password || !repeatPassword || !termsAccepted) {
        showAlertError();
    } else if (password.length < 6) {
        showAlertError();
    } else if (password !== repeatPassword) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});

