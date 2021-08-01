const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");



app.use(cors({
    origin: ["http://localhost:3000"],
    methodes: ["GET","POST"],
    credentials: true,
  }));


// Import Routes
const authRoute = require("./routes/auth");
const createGig = require('./routes/gig');
const allGig = require('./routes/Get/allGigs');



dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_QUERY, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () => {
    console.log('Successfully connected to Mongo DB');
});


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    key:"userId",
    secret: "airbus",
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000
}))


// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/", createGig);
app.use("/api/", allGig);


app.listen( process.env.PORT || 3001, () => console.log("Server is Up and Running"));
