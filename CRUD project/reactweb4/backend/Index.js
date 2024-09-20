const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let items = [
    { id: 1, name: 'Item 1', age: 20 },
    { id: 2, name: 'Item 2', age: 30 },
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = { ...req.body, id: items.length + 1 };
    items.push(newItem);
    res.json(newItem);
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items = items.map(item => (item.id === parseInt(id) ? updatedItem : item));
    res.json(updatedItem);
});

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== parseInt(id));
    res.status(204).end();
});

app.listen(port, () => {
    console.log(Server running on 'http://localhost:${port}');
});