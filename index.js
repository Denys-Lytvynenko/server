const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");

const port = 4000;
const app = express();

/** allow cross origin requests */
app.use(cors());

/** Applying middleware */
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

/** Connecting to the MongoDB database */
mongoose.connect(
    "mongodb+srv://denys:eNY6Sn1H5oNGBa6W@cluster0.icqpa.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

/** Listening of port */
app.listen(port, () => {
    console.log(`now listening for request on port ${port}`);
});
