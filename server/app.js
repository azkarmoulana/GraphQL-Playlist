const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema")
const mongoose = require("mongoose");

const app = express();

const PORT = 4000;

const DB_URL = "mongodb+srv://user:1234@cluster0.bdjdf.mongodb.net/GRAPHQL-PLAYLIST?retryWrites=true&w=majority";

// mongoose.connect(DB_URL);
// mongoose.connection.once("open", () => {
//     console.log('connected to database')
// });
const m = mongoose.connect(DB_URL, {useNewUrlParser: true});
m.then(res => {
    console.log('connected successfully ', res)
}).catch(e => {
    console.log('error connecting db ', e)
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});