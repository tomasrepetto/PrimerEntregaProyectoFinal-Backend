import express from "express";
import products from './routers/products.js';
import carts from './routers/carts.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    return res.send('Biblioteca de Discos');
});
app.use('/api/products', products);
app.use('/api/carts', carts);

app.listen(PORT, () => {
    console.log(`Corriendo aplicacion en el puerto ${PORT}`);
});