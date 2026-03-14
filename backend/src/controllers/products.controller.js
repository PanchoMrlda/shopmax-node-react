const products = [
    {id: 1, name: "Product 1", price: 10},
    {id: 2, name: "Product 2", price: 15}
];

export function getProducts(req, res) {
    res.json(products);
}

export function getProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({message: "Product not found"});
    res.json(product);
}

export function createProduct(req, res) {
    const {name, price} = req.body || {};
    if (!name || typeof price !== "number") {
        return res.status(400).json({message: "Invalid product data"});
    }
    const id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const product = {id, name, price};
    products.push(product);
    res.status(201).json(product);
}
