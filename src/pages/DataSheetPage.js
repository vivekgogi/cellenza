// DataSheetpPage.js

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productService from "../admin/ProductService";
import { Link, useParams } from "react-router-dom";

const DataSheet = () => {
  const { productId, fileNumber } = useParams();
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

  const { title, file1Url, file2Url, subtitle, brand, category } = product;
  const selectedFileUrl = fileNumber === "1" ? file1Url : file2Url;

  return (
    <div className="datasheet_section">
      <div className="datasheet_header">
        <h1>Datasheet</h1>
        <h6>Explore Exciting Opportunities with Us</h6>
      </div>

      <div className="datasheet_info">
        <h1 className="product-title">{title}</h1>
        <h6 className="product-subtitle">{subtitle}</h6>
        <div className="product-brand-and-category">
          <span className="product-brand">
            {brand} <i className="fa-solid fa-tag"></i>
          </span>
          <span className="product-category">{category}</span>
        </div>
      </div>

      <div className="datasheet">
        <iframe
          title={`Datasheet ${fileNumber}`}
          src={selectedFileUrl}
          width="100%"
          height="600"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

function DataSheetPage() {
  return (
    <div>
      <Header />
      <DataSheet />
      <Footer />
    </div>
  );
}

export default DataSheetPage;

// DataSheetPage.js

// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import productService from "../admin/ProductService";
// import { useParams } from "react-router-dom";
// import { Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// const DataSheet = () => {
//   const { productId, fileNumber } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const products = await productService.getAllProducts();
//         const selectedProduct = products.find((p) => p.id === productId);

//         if (selectedProduct) {
//           setProduct(selectedProduct);
//         } else {
//           console.log("Product not found");
//         }
//       } catch (error) {
//         console.error("Error fetching product details: ", error.message);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const { title, file1Url, file2Url, subtitle, brand, category } = product;
//   const selectedFileUrl = fileNumber === "1" ? file1Url : file2Url;

//   return (
//     <div className="datasheet_section">
//       <div className="heading">
//         <h2>Datasheet</h2>
//       </div>

//       <div className="datasheet_info">
//         <h1 className="product-title">{title}</h1>
//         <h1 className="product-subtitle">{subtitle}</h1>
//         <span className="product-brand">
//           {brand} <i className="fa-solid fa-tag"></i>
//         </span>
//         <span className="product-category">{category}</span>
//       </div>

//       <div className="datasheet">
//         <Document file={selectedFileUrl}>
//           <Page pageNumber={1} />
//         </Document>
//       </div>
//     </div>
//   );
// };

// function DataSheetPage() {
//   return (
//     <div>
//       <Header />
//       <DataSheet />
//       <Footer />
//     </div>
//   );
// }

// export default DataSheetPage;
