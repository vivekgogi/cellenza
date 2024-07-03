// import React, { useState, useEffect } from "react";
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import logo from "../images/logo.jpg";
// import productService from "../admin/ProductService";
// // import TemporaryDrawer from "./TemporaryDrawer";
// import MainHeader from "./MainHeader";

// function Header() {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const fetchedCategories = await productService.getAllCategories();
//         setCategories(fetchedCategories);
//       } catch (error) {
//         console.error("Error fetching categories: ", error.message);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (category) => {
//     // Navigate to the Products page with the selected category
//     navigate(`/products?category=${category}`);
//   };

//   return (
//     <header className="complete_header">
//       {/* <div className="pre_header">
//         <div className="lang_box">
//           <button class="lang_box_list">
//             English <i class="fa fa-angle-down " aria-hidden="true"></i>
//           </button>
//           <div class="lang_box_content">
//             <a href="/">English</a>
//             <a href="/">Hindi</a>
//             <a href="/">Marathi</a>
//           </div>
//         </div>

//         <div className="contact_nav">
//           <a href="/">
//             <i className="fa fa-phone"></i>
//             <span>+91 7774969555</span>
//           </a>
//           <a href="mailto:info@cellenza.in">
//             <i className="fa fa-envelope" aria-hidden="true"></i>
//             <span>info@cellenza.in</span>
//           </a>
//           <a href="/">
//             <i className="fa fa-map-marker" aria-hidden="true"></i>
//             <span>Solapur, Maharashtra</span>
//           </a>
//         </div>

//         <div className="social_box">
//           <a href="/">
//             <i className="fa fa-facebook" aria-hidden="true"></i>
//           </a>
//           <a href="/">
//             <i className="fa fa-twitter" aria-hidden="true"></i>
//           </a>
//           <a href="/">
//             <i className="fa fa-linkedin" aria-hidden="true"></i>
//           </a>
//           <a href="/">
//             <i className="fa fa-instagram" aria-hidden="true"></i>
//           </a>
//         </div>
//       </div>  */}

//       {/* <div className="main_header">
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>

//         <div className="menu">
//           <ul className="menu_list">
//             <li>
//               <Link to="/">HOME</Link>
//             </li>
//             <li>
//               <Link to="/products">
//                 <div className="products">
//                   <button className="products_category_list">
//                     PRODUCTS{" "}
//                     <i className="fa fa-angle-down " aria-hidden="true"></i>
//                   </button>
//                   <div className="products_category">
//                     {categories.map((category) => (
//                       <a
//                         href="/"
//                         key={category}
//                         onClick={() => handleCategoryClick(category)}
//                       >
//                         {category}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             </li>
//             <li>
//               <Link to="/about">ABOUT</Link>
//             </li>
//             <li>
//               <Link to="/career">CAREER</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="cta_btn">
//           <a href="/">Contact Us</a>
//         </div>

//       </div>
//       {/* <TemporaryDrawer /> */}

//       <Outlet />

//       <MainHeader />
//     </header>
//   );
// }

// export default Header;
