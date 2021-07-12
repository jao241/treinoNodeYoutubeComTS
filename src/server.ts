import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(routes);

//Tem que pegar as imagens no github
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333, ()=>{
    console.log('Server started on port 3333!')
});

