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

    res.status(StatusCodes.CREATED).json({
      status: "success",
      message: "Product created successfully",
      data: productStatus,
    });
  });

  getAllProducts = asyncWrapper(async (req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();

    res
      .status(StatusCodes.OK)
      .json({ status: "success", count: products.length, data: products });
  });

  getAllVendorProducts = asyncWrapper(async (req: Request, res: Response) => {
    const { vendorId: vendorId } = req.params;

    const products = await this.productService.getAllProductsForVendor(
      vendorId! as string
    );

    res
      .status(StatusCodes.OK)
      .json({ status: "success", count: products.length, data: products });
  });

  getSingleProduct = asyncWrapper(async (req: Request, res: Response) => {
    const { id: productId } = req.params;

    const product = await this.productService.getSingleProduct(
      productId as string
    );

    res.status(StatusCodes.OK).json({ status: "success", data: product });
  });

  updateProduct = asyncWrapper(async (req: Request, res: Response) => {});

  deleteProduct = asyncWrapper(async (req: Request, res: Response) => {});
}
