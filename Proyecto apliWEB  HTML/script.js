function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    // Aquí podrías agregar lógica adicional si es necesario
    const idType = document.getElementById('id-type').value;
    const idNumber = document.getElementById('id-number').value;

    // Redireccionar al usuario a la página del dashboard
    window.location.href = 'dashboard.html';
}