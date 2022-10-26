import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;

app.use(express.static('views'))
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    fs.readFile('characters.json', 'utf8', (err, data) => {
        res.render('home', { characters: JSON.parse(data) });
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost/${port}`);
});
