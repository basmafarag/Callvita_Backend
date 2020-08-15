const express = require('express')
const bodyParser = require('body-parser');
//const cors = require('cors');

const app = express();
const tasks = [{
    id: 1,
    title: 'Learn React',
    description: 'Learn how to use react in building web app'
    }, {
    id: 2,
    title: 'Learn Node',
    description: 'Learn how to use node in building server'
    }, {
    id: 3,
    title: 'Learn Array Manipulation',
    description: 'Learn how to manipulate arrays in javascript'
    }];

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


//get all tasks stored in the database.
exports.get =  (req, res) => {
    res.json(tasks);
};

//search for a task by title or descripition
exports.search = (req, res) => {

    const title = req.query.title;
    const description = req.query.description;

    console.log(req);
    for (let task of tasks) {
        if (task.title === title || task.description === description) {
            res.json(task);
            return;
        }
    }

    res.status(404).send('task not found');
};

//create a new task
exports.create = (req, res) => {
    
   // TODO //Validation

    // Validate request

    //   if (!req.query) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    //   }
    //   else{

    // Create a Tutorial
    const task = new Object({
      id: req.query.id,
      title: req.query.title,
      description: req.query.description 
    });
    res.status(400).send({message: "Task Added"});

    // Save Tutorial in the database
    console.log(tasks.length);
    tasks.push(task);
    console.log(tasks.length);

    console.log(tasks[3].title);
//}
  };

//delete a task by its id
exports.delete = (req, res) => {

    const id = req.query.id;

    // Remove item from the books array
    task = tasks.filter(i => {
        if (i.id != id) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
};

//update a task
exports.update = (req, res) => {

    const id = req.query.id;
    const newTask = req.query;

    // Remove item from the books array
    const i=0;
    for (let i ; i < tasks.length; i++) {
        let task = tasks[i]
        if (task.id === id) {
            
            tasks[i].id = newTask.id;
            tasks[i].title = newTask.title;
            tasks[i].description = newTask.description;
           
        }
    }
    console.log(newTask);
    console.log(tasks[i]);
    res.send('Book is edited');
};