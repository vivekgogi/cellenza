import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productService from "../admin/ProductService";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error.message);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category, query) => {
    let filteredProducts = products;

    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (query) {
      query = query.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    }

    return filteredProducts;
  };

  return (
    <div className="products_section">
      <div
        className="products_header"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>Our Products</h1>
        <h6>Explore Our Diverse Range of High-Quality Products.</h6>
        <p>
          Explore excellence in every product. Discover our high-quality
          adhesives, coatings, and specialty chemicals designed to redefine
          industry standards. Dive into a world of innovation and reliability as
          you browse through our premium offerings designed to meet your every
          need.
        </p>
      </div>

      <div
        className="filter_and_search"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="filter_box">
          {/* <label htmlFor="categoryFilter">Category:</label> */}
          <select
            id="categoryFilter"
            className="styled-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="industrial chemicals">Stone Adhesives</option>
            <option value="adhesives">Stone Sealer</option>
            <option value="glues">Care Products</option>
            <option value="sealants">Clear Resins</option>
            <option value="coatings">Cleaners</option>
          </select>
        </div>

        <div className="search_bar">
          <input
            type="text"
            placeholder="Search Products....."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="products_container">
        {filterProducts(selectedCategory, searchQuery).map((product, index) => (
          <div
            className="product_card"
            key={index}
            data-aos="slide-up"
            data-aos-duration="1000"
          >
            <div className="product_image">
              <img src={product.imageUrl} alt={`Product ${index + 1}`} />
            </div>

            <div className="product_info">
              <p className="brand">
                {product.brand} <i className="fa-solid fa-tag"></i>
              </p>
              <h3 className="name">{product.title}</h3>
              <p className="subtitle">{product.subtitle}</p>
              <Link to={`/products/${product.id}`} className="view_details">
                <i className="fa fa-eye"></i>View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

// // Products.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import productService from "../admin/ProductService";

// function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//     useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const categoriesCollection = await productService.getAllCategories();
//         setCategories(categoriesCollection);
//       } catch (error) {
//         console.error("Error fetching categories: ", error.message);
//       }
//     };

//     const fetchProducts = async () => {
//       try {
//         const data = await productService.getAllProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products: ", error.message);
//       }
//     };

//     fetchCategories();
//     fetchProducts();

//     // Update selectedCategory based on the query parameter
//     const searchParams = new URLSearchParams(location.search);
//     const categoryFromQuery = searchParams.get("category");
//     setSelectedCategory(categoryFromQuery || "all");
//   }, [location.search]);

//     const fetchProducts = async () => {
//       try {
//         const data = await productService.getAllProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products: ", error.message);
//       }
//     };

//     fetchCategories();
//     fetchProducts();
//   }, []);

//   const filterProducts = (category, query) => {
//     let filteredProducts = products;

//     if (category !== "all") {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.category.toLowerCase() === category.toLowerCase()
//       );
//     }

//     if (query) {
//       query = query.toLowerCase();
//       filteredProducts = filteredProducts.filter((product) =>
//         product.title.toLowerCase().includes(query)
//       );
//     }

//     return filteredProducts;
//   };

//   return (
//     <div className="products_section">
//       <div className="products_header">
//         <h1>PRODUCTS</h1>
//       </div>

//       <div className="filter_box">
//         <label htmlFor="categoryFilter">Category Filter:</label>
//         <select
//           id="categoryFilter"
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="all">All</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="search_bar">
//         <input
//           type="text"
//           placeholder="Search Products"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="products_container">
//         {filterProducts(selectedCategory, searchQuery).map((product, index) => (
//           <div className="product_card" key={index}>
//             <Link to={`/products/${product.id}`}>
//               <div className="product_image">
//                 <img src={product.imageUrl} alt={`Product ${index + 1}`} />
//               </div>
//               <div className="product_info">
//                 <p className="brand">
//                   {product.brand} <i className="fa-solid fa-tag"></i>
//                 </p>
//                 <h3 className="name">{product.title}</h3>
//                 <p className="subtitle">{product.subtitle}</p>
//                 <Link to={`/products/${product.id}`} className="view_details">
//                   <i className="fa fa-eye"></i>View Details
//                 </Link>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
