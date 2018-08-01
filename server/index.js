const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

//Routes
app.post('/getPictures', (req, res) => {
    let {searchTerm} = req.body;
    axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchTerm}&format=json&nojsoncallback=true`).then(response => {
        res.send(response.data)
    })
})

app.listen(3005, () => console.log('listening...'));