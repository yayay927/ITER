require('dotenv').config();
const {PORT_TEST, PORT, NODE_ENV, API_VERSION} = process.env;
const port = NODE_ENV == 'test' ? PORT_TEST : PORT;

// Express Initialization
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.set('trust proxy', 'loopback');
app.set('json spaces', 2);

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// CORS allow all
app.use(cors());

// API routes
app.use('/api/' + API_VERSION,
    [
        require('./server/routes/admin_route'),
        require('./server/routes/product_route'),
        require('./server/routes/marketing_route'),
        require('./server/routes/user_route'),
        require('./server/routes/order_route'),
    ]
);

// Page not found
app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// Error handling
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

if (NODE_ENV != 'production'){
    app.listen(port, () => {console.log(`Listening on port: ${port}`);});
}

module.exports = app;
