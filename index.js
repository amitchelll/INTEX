const express = require("express");

let app = express();

let path = require("path");

const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended : true}));

const knex = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        user: "postgres",
        password: "packers20",
        database: "bucket_list",
        port: 5432
    }
})

app.get("/", (req, res)=> {
    knex.select().from("country").then( country  => {
        res.render("index.html", { mycountry : country});
    });
});

app.listen( port, () => console.log("myTravels is listening"));