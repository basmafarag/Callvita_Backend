module.exports = app => {
    const tasks = require("../controllers/tasks.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", tasks.create);
    router.get("/get", tasks.get);
    router.get("/search", tasks.search)
    router.delete("/delete", tasks.delete);
    router.put("/update",tasks.update);
    router.get("/getTask", tasks.getTask);

    app.use('/api/tasks', router);

};