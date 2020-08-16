module.exports = app => {
    const tasks = require("../controllers/tasks.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", tasks.create);
    // get all tasks
    router.get("/get", tasks.get);
    router.get("/search", tasks.search)
    router.delete("/delete", tasks.delete);
    router.put("/update",tasks.update);
    router.get("/getTask", tasks.getTask);

    app.use('/api/tasks', router);

};