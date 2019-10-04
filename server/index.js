const express =  require("express")
const getProducts = require("./getProducts")
const getProduct = require("./getProduct")
const getName = require("./getName")

const app = express();

app.get("/api/products", getProducts) 

app.get("/api/product/:id", getProduct)

app.get("/api/products/:product_name", getName)

app.listen(5050, () => {
    console.log("Hellloooooo")
})