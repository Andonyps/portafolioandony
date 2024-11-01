const express = require('express'); // Importa Express
const hbs = require('hbs'); // Importa Handlebars
const path = require('path'); // Importa el módulo de rutas de Node

const app = express(); // Crea una instancia de Express
const port = process.env.PORT || 8081; // Establece el puerto, usa el de la variable de entorno o 8081 por defecto

// Configuración de Handlebars
app.set('view engine', 'hbs'); // Define Handlebars como motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Define la carpeta de vistas
hbs.registerPartials(path.join(__dirname, '/views/partials')); // Registra los partials

// Configura los archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Sirve archivos estáticos desde la carpeta 'public'

// Ruta principal
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
});

app.get('/proyectos', (req, res) =>{
    res.render('proyectos',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})

app.get('/proyecto1', (req, res) =>{
    res.render('proyecto1',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto2', (req, res) =>{
    res.render('proyecto2',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto3', (req, res) =>{
    res.render('proyecto3',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto4', (req, res) =>{
    res.render('proyecto4',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto5', (req, res) =>{
    res.render('proyecto5',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto6', (req, res) =>{
    res.render('proyecto6',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto7', (req, res) =>{
    res.render('proyecto7',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})
app.get('/proyecto8', (req, res) =>{
    res.render('proyecto8',{
        nombre: 'Brenton Andony', // Envía el nombre al template
        titulo: 'Portafolio' // Envía el título al template
    });
})

// Ruta de error 404
app.get('*', (req, res) => {
    res.status(404).render('404'); // Renderiza la vista 404.hbs para rutas no encontradas
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`); // Mensaje de confirmación
});
