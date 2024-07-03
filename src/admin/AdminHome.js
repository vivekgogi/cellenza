import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import ProductService from "./ProductService";
import AnnouncementForm from "./AnnouncementForm";
import AnnouncementsList from "./AnnouncementsList";
import VideoCollection from "./VideoCollection";
import { Link } from "react-router-dom";
import "./style.css";

const AdminHome = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentSection, setCurrentSection] = useState(
    localStorage.getItem("currentSection") || "products"
  );

  useEffect(() => {
    // Check local storage for login status on page load
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Save the current section to local storage
    localStorage.setItem("currentSection", currentSection);
  }, [currentSection]);

  const handleLogin = () => {
    // Hardcoded username and password for demonstration purposes
    const hardcodedUsername = "admin";
    const hardcodedPassword = "Admin@2023";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsLoggedIn(true);
      // Store login status in local storage
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove login status from local storage on logout
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentSection");
    setUsername("");
    setPassword("");
  };

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the server or an API
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      // Add a new product
      const addedProduct = await ProductService.addProduct(newProduct);

      // Fetch the updated product list
      const updatedProducts = await ProductService.getAllProducts();

      // Update the state with the updated product list
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error adding product: ", error.message);
    }
  };

  const handleEditProduct = async (editedProduct) => {
    try {
      // Edit an existing product
      await ProductService.editProduct(editedProduct);

      // Fetch the updated product list
      const updatedProducts = await ProductService.getAllProducts();

      // Update the state with the updated product list
      setProducts(updatedProducts);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error editing product: ", error.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      // Delete a product
      await ProductService.deleteProduct(productId);

      // Fetch the updated product list
      const updatedProducts = await ProductService.getAllProducts();

      // Update the state with the updated product list
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product: ", error.message);
    }
  };

  const handleEditButtonClick = (product) => {
    // Set the product to be edited
    setEditingProduct(product);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "products":
        return (
          <>
            <ProductList
              products={products}
              onEditClick={handleEditButtonClick}
              onDeleteClick={handleDeleteProduct}
            />
            <ProductForm
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              editingProduct={editingProduct}
            />
          </>
        );
      case "announcements":
        return (
          <>
            <AnnouncementForm />
            <AnnouncementsList />
          </>
        );
      case "videos_collection":
        return (
          <>
            <VideoCollection />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="admin">
          <div className="admin_header">
            <h1>
              Welcome, <span>Cellenza</span> Admin!
            </h1>
            <div>
              <Link
                to="#"
                onClick={() => setCurrentSection("products")}
                className={currentSection === "products" ? "active" : ""}
              >
                Products
              </Link>
              <Link
                to="#"
                onClick={() => setCurrentSection("announcements")}
                className={currentSection === "announcements" ? "active" : ""}
              >
                Announcements
              </Link>
              <Link
                to="#"
                onClick={() => setCurrentSection("videos_collection")}
                className={currentSection === "videos_collection" ? "active" : ""}
              >
                Videos Collection
              </Link>

              <button onClick={handleLogout}>
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </div>
          </div>
          <div className="admin_content">{renderSection()}</div>
        </div>
      ) : (
        <div className="login_form">
          <h1>
            <span>Cellenza</span> Admin
          </h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
