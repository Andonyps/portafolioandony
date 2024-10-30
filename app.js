const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express(); // Solo una declaración de app
const port = process.env.PORT || 8081; // Valor por defecto si PORT no está en .env

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Otras rutas aquí...
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Brenton Andony',
        titulo: 'Curso de Node Js'
    })
})
// Ruta de error 404
app.get('*', (req, res) => {
    res.status(404).render('404'); // Renderiza la vista 404.hbs
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

