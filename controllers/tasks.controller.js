const express = require('express')
const bodyParser = require('body-parser');
//const cors = require('cors');

const app = express();
var tasks = [{
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
    const query = req.query.title;
    let results = tasks.filter(item => item.title.toLowerCase().indexOf(query) > -1
        || item.description.toLowerCase().indexOf(query) > -1);
    res.json(results);
};

//create a new task
exports.create = (req, res) => {
    
  
    const task = new Object({
        id: tasks.length+1,
        title: req.body.title,
        description: req.body.description 
      });
    res.status(200).send({message: "Task Added"});

    // Save Tutorial in the database
    tasks.push(task);

//}
  };

//delete a task by its id
exports.delete = (req, res) => {

    const id = req.query.id;
    for (let i=0 ; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks = tasks.slice(0, i).concat(tasks.slice(i + 1, tasks.length));
        }
    }

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
    const newTask = req.body;

    for (let i=0 ; i < tasks.length; i++) {

        let task = tasks[i]
        if (task.id == id) {
            tasks[i]= newTask;
        }
        
    }
    res.send('Task is edited');
};



//get specific task stored in the database.
exports.getTask =  (req, res) => {
   // console.log(req.query)

    for (let task of tasks) {
        if (task.id === parseInt(req.query.id)) {
            res.json(task);           
        }
    }
};




