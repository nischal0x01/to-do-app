require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl)

const todoSchema = mongoose.schema({
    title: String,
    description: String,
    completed: boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}