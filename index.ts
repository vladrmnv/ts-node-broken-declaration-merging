import express from 'express';

const app = express();

app.get('/', (req, res) => {
    req.addedProperty = 'someProp';
    console.log(req.addedProperty);
});

app.listen(3000, () => {
    console.log('started');
})
