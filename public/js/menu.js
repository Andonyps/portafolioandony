document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic en el botón cierre el menú
        menu.classList.toggle('hidden'); // Alternar la clase 'hidden'
    });

    document.addEventListener('click', function() {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden'); // Ocultar el menú si se hace clic fuera de él
        }
    });
});
