import * as express from "express";

const Routes = express.Router();

interface Todo {
  id: number;
  text: string;
}

let todos: Todo[] = [];
let nextId = 1;

// Get all todos
Routes.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a specific todo by id
Routes.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

// Create a new todo
Routes.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send('Text is required');
  }
  const newTodo = { id: nextId++, text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
Routes.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (todo) {
    const { text } = req.body;
    if (text) {
      todo.text = text;
      res.json(todo);
    } else {
      res.status(400).send('Text is required');
    }
  } else {
    res.status(404).send('Todo not found');
  }
});

// Delete a todo
Routes.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Todo not found');
  }
});


export default Routes;