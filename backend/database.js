require('dotenv').config();
const mongoose = require("mongoose")
const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}