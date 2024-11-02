document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        menu.classList.toggle('hidden'); 
    });

    document.addEventListener('click', function() {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden'); 
        }
    });
});
