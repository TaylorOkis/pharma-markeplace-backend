import { Request, Response } from "express";

import asyncWrapper from "@/core/utils/async.util.js";
import { ProductService } from "./product.service.js";
import { ProductDTO } from "./product.dtos.js";
import { PayLoadRequest } from "@/core/types/types.js";
import { StatusCodes } from "http-status-codes";

export class ProductController {
  private productService = new ProductService();

  createProduct = asyncWrapper(async (req: PayLoadRequest, res: Response) => {
    const productToAdd = { ...req.body, vendor_id: req.user!.uid };
    const productStatus = await this.productService.createProduct(
      productToAdd as ProductDTO
    );

    res
      .status(StatusCodes.CREATED)
      .json({ status: "success", message: "Product created successfully" });
  });

  getAllProducts = asyncWrapper(async (req: Request, res: Response) => {});

  getSingleProduct = asyncWrapper(async (req: Request, res: Response) => {});

  updateProduct = asyncWrapper(async (req: Request, res: Response) => {});

  deleteProduct = asyncWrapper(async (req: Request, res: Response) => {});
}
