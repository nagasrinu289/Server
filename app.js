const express = require('express');
const app = express();
const port = 3030;
const cors = require('cors');

// Sample local data representing items
app.use(cors());
app.use(express.json()); // Use express.json() for handling JSON requests

const items = [
  {
    "id": "1",
    "item": "Item A",
    "checked": true
  },
  {
    "id": "2",
    "item": "Item B",
    "checked": false
  },
  {
    "id": "3",
    "item": "Item C",
    "checked": true
  }
];

// Handle GET request to retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Handle GET request to retrieve an item by ID
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const item = items.find(item => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Handle DELETE request to delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const index = items.findIndex(item => item.id === itemId);

  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Handle POST request to add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json({message:"success"})
});

app.get('/', (req, res) => {
  res.send('hello world');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
