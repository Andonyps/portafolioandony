const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyectos', (req, res) =>{
    res.render('proyectos',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto1', (req, res) =>{
    res.render('proyecto1',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto2', (req, res) =>{
    res.render('proyecto2',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto3', (req, res) =>{
    res.render('proyecto3',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto4', (req, res) =>{
    res.render('proyecto4',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto5', (req, res) =>{
    res.render('proyecto5',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto6', (req, res) =>{
    res.render('proyecto6',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/proyecto7', (req, res) =>{
    res.render('proyecto7',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('/contacto', (req, res) =>{
    res.render('contacto',{
        nombre: 'Brenton Andony',
        titulo: 'Portafolio'
    });
});

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
