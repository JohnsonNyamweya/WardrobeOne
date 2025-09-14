import { v2 as cloudinary } from "cloudinary";
import ProductModel from "../models/ProductModel.js";

//Add product function
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Validate price
    const parsedPrice = Number(price);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid price value. Price must be a non-negative number.",
      });
    }

    const productData = {
      name,
      description,
      price: parsedPrice,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new ProductModel(productData);
    await product.save();

     return res.status(201).json({
      success: true,
      message: "Product added successfully."
    });
  } catch (error) {
    console.log(error);
    console.error("Error adding product:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

//list product function
const listProducts = async (req, res) => {
  try {
    let products = await ProductModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//remove product function
const removeProduct = async (req, res) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

//Single product infor function
const singleProduct = async (req, res) => {
    try {   
        const {productId} = req.params.id;
        const product = await ProductModel.findById(productId);
        res.status(200).json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal server error", error: error.message,  });
    }
};

export { addProduct, listProducts, removeProduct, singleProduct };
