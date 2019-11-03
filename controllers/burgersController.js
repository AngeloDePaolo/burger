var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", (req, res)=>{
    burger.all((burgerData)=>{
        //Handlebars specific rendering, data is stored and available in key given to object
        // res.render("index", {burgers:burgerData})
        res.json(burgerData)
    });
});
//route looks like http://localhost:3000/burger/create/Swiss
router.post("/burger/create/:burgerName", (req, res)=>{
    //req.params.burgerName = Swiss
    console.log(req.params.burgerName);
    burger.create(req.params.burgerName, (result)=>{
        console.log(result);
        res.redirect("/");
    });
});
//route looks like http://localhost:3000/burger/create/3
router.put("/burger/update/:id", (req, res)=>{
    //req.params.id = 3
    burger.update(req.params.id, (result)=>{
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;