const express = require('express');
const router = express.Router();
let users = require('../data/fakeDB');

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  console.log('Requested ID:', req.params.id);
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

router.post('/', (req, res) => {
  const newUser = req.body;  
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;  
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});


router.delete('/:id', (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index === -1) return res.status(404).send('User not found');

  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});

module.exports = router;
