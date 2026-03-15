import {Request, Response} from "express";
import Product from "@models/Product";

export const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({message: "Error fetching products", error});
    }
};

export const show = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({message: "Product not found"});
            return;
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({message: "Error fetching product", error});
    }
};

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, price, description, inStock} = req.body;

        const newProduct = new Product({
            name,
            price,
            description,
            inStock
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({message: "Error creating product", error});
    }
};
