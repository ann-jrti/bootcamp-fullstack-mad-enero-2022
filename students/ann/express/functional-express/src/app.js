import express from "express";
import { readFile, writeFile, appendFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/products', async (req, res) => {
    const products = await readFile('./products.json', { encoding: 'utf8' })
    res.json(JSON.parse(products));
})

app.get('/products/:id', async (req, res) => {
    const products = await readFile('./products.json', { encoding: 'utf8' })
    res.json(JSON.parse(products));
    const parsed = JSON.parse(products)
    const found = parsed.find(p => p.id === req.params.id)
    res.json(found)
})

app.delete('/products/:id', async (req, res) => {
    const rawProducts = await readFile('./products.json', { encoding: 'utf8' })
    const products = JSON.parse(rawProducts)
    console.log(products);
    const productIndex = products.indexOf(p => {
        return p.id !== req.params.id
    })
    products.splice(productIndex, 1)
    await writeFile('./products.json', `${JSON.stringify(products, null, 2)}`)
    res.send('Request sent')
})

// patch

app.patch('/products/:id', async (req, res, next) => {
    const changes = req.body;
    const rawProducts = await readFile('./products.json', { encoding: 'utf8' });
    const products = JSON.parse(rawProducts);

    const selectedProduct = products.find(p => p.id === req.params.id);
    Object.assign(selectedProduct, changes);

    await writeFile('./products.json', JSON.stringify(products, null, 2));
    res.send('done');
})

app.post('/products', async (req, res, next) => {
    const products = await readFile('./products.json', { encoding: 'utf8' });
    const productsJSON = JSON.parse(products);
    const productPOST = req.body

    const productObj = {
        "name": productPOST.name,
        "price": productPOST.price,
        "id": uuidv4()
    }
    productsJSON.push(productObj)
    await writeFile('./products.json', `${JSON.stringify(productsJSON, null, 2)}`)
    res.json('ty')
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})