// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import productsData from "../Data/productsData.json";
// import { Link, useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = productsData[productId];

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const {
//     name,
//     image,
//     productSubtitle,
//     productCategory,
//     brandName,
//     description,
//   } = product;

//   return (
//     <div className="product-details">
//       <div className="product-image">
//         <img src={image} alt={`Product ${productId + 1}`} />
//       </div>
//       <div className="product-info">
//         <h1 className="product-title">{name}</h1>
//         <h1 className="product-subtitle">{productSubtitle}</h1>
//         <span className="product-category">
//           {brandName}
//           <i className="fa-solid fa-tag"></i>
//         </span>
//         <span className="product-category">{productCategory}</span>
//         <p className="product-description">{description}</p>
//         <Link
//           to={`/products/${productId}/datasheet`}
//           className="view-datasheet-button"
//         >
//           <i className="fa fa-eye"></i> Datasheet
//         </Link>
//       </div>
//     </div>
//   );
// };

// function ProductDetailsPage() {
//   return (
//     <div>
//       <Header />
//       <ProductDetails />
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;

// ProductDetailsPage.js

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productService from "../admin/ProductService";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const products = await productService.getAllProducts();
        const selectedProduct = products.find((p) => p.id === productId);

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details: ", error.message);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, imageUrl, subtitle, brand, category, description } = product;

  return (
    <div className="product-details">
      <div className="product-image">
        <img
          src={imageUrl}
          alt={`Product ${productId + 1}`}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>
      <div
        className="product-info"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <h1 className="product-title">{title}</h1>
        <h1 className="product-subtitle">{subtitle}</h1>
        <span className="product-category">
          {brand} <i className="fa-solid fa-tag"></i>
        </span>
        <span className="product-category">{category}</span>
        <p className="product-description">{description}</p>
        <Link
          to={`/products/${productId}/datasheet/1`} // pass 1 for Datasheet 1
          className="view-datasheet-button"
        >
          <i className="fa fa-eye"></i> Technical Data Sheet
        </Link>
        <Link
          to={`/products/${productId}/datasheet/2`} // pass 2 for Datasheet 2
          className="view-datasheet-button"
        >
          <i className="fa fa-eye"></i> Material Safety Datasheet
        </Link>
      </div>
    </div>
  );
};

function ProductDetailsPage() {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
