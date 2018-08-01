const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

//Routes
app.get('/getPictures', (req, res) => {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true').then(response => {
        res.send(response.data)
    })
})

app.listen(3005, () => console.log('listening...'));