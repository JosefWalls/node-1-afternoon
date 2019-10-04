const products = require ("../products.json")

const getName = (req, res) => {
    const item = products.find(val => val.product_name === req.params.product_name)
    if (item){
        res.status(200).send(item)
    } else {
        res.status(404).send("Not happnin fam")
    }
}


module.exports = getName;