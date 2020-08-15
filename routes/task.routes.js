module.exports = app => {
    const tasks = require("../controllers/tasks.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tasks.create);
    // get all tasks
    router.get("/get", tasks.get);
    router.get("/search", tasks.search)
    router.delete("/delete", tasks.delete);
    router.post("/update",tasks.update);

    app.use('/api/tasks', router);

};