import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
// app.use(cors({
//     origin: ['dominio.com.br']
// }));

app.use(express.json());

app.use(routes);

//Tem que pegar as imagens no github
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, ()=>{
    console.log('Server started on port 3333!')
});

