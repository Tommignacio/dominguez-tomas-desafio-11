import { Router } from 'express';
import products from '../../contenedores/TestProductsClass.js';


const testProductsRouter = Router();


testProductsRouter.get('/', async (req, res) => {
    let users = products.createUsuers(5)
    res.render("index", { users })
})


export default testProductsRouter;