document.addEventListener('DOMContentLoaded', () => {
    // Acción para el botón de llamada a la acción en la página principal
    document.querySelector('.cta-button').addEventListener('click', () => {
        window.location.href = 'products.html';
    });

    // Acción para el formulario de personalización
    document.querySelector('#custom-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tu vaso personalizado ha sido añadido al carrito.');
    });

    // Control de cantidad en el formulario de personalización
    const quantityInput = document.querySelector('#quantity');
    document.querySelector('#decrease').addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });
    document.querySelector('#increase').addEventListener('click', () => {
        quantityInput.value++;
    });

    // Acción para el formulario de contacto
    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    });
});