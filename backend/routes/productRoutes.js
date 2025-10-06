import express from "express";
import { getProducts, createProduct, getProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct); // Assuming you want to get a product by ID, you might want to implement this in the controller
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;