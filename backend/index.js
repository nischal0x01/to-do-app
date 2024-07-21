const express = require("express")
const { createToDo, updateTodo } = require("./types")
const app = express();
const { todo } = require("./database")
const mongoose = require("mongoose")

app.use(express.json());
app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.json(400).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Database created"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({
    })

    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.json(400).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})
app.listen(3000);