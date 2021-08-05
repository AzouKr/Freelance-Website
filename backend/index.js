const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");



app.use(cors({
    origin: ["http://localhost:3000"],
    methodes: ["GET","POST"],
    credentials: true,
  }));



// Import Routes
const authRoute = require("./routes/auth");
const sendOrder = require("./routes/SendOrder");
const createGig = require('./routes/gig');
const allGig = require('./routes/Get/allGigs');
const FindOrder = require('./routes/Get/FindOrders');
const FindUser = require('./routes/Get/User');




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
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    key: "user",
    secret: "airbus",
    resave: false,
    saveUnintialized: false,
    cookie: { maxAge: oneDay },
}))


// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/", createGig);
app.use("/api/", allGig);
app.use("/api/", sendOrder);
app.use("/api/", FindOrder);
app.use("/api/", FindUser);






app.listen( process.env.PORT || 3001, () => console.log("Server is Up and Running"));
