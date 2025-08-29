import { Router } from "express";
import { ProductController } from "./product.controller.js";
import { authenticateUser } from "@/core/middlewares/auth.middleware.js";

const router = Router();
const productController = new ProductController();

router.use(authenticateUser);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);
router.get("/vendor/:vendorId", productController.getAllVendorProducts);
router
  .route("/:id")
  .get(productController.getSingleProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
