import {Router} from "express";
import productRoutes from "@routes/product-routes";

const router = Router();

/**
 * Health Check Route
 * Useful for Docker or Load Balancers to verify the API is alive
 */
router.get("/health", (req, res) => {
    res.status(200).json({status: "OK", uptime: process.uptime()});
});

/**
 * Combined Routes
 * This allows you to prefix all routes.
 * E.g., The product index will be available at GET /api/products
 */
router.use("/products", productRoutes);

// You can add more routes here as your app grows:
// router.use('/users', userRoutes);
// router.use('/orders', orderRoutes);

export default router;
