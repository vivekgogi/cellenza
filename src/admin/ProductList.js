// ProductList.js

import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, onEditClick, onDeleteClick }) => {
  return (
    <div className="product_list">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.subtitle}</td>
              <td className="category">{product.category}</td>
              <td className="actions">
                {/* <button onClick={() => onDeleteClick(product.id)}>View</button> */}
                {/* <button onClick={() => onDeleteClick(product.id)}><i class="fa-solid fa-eye"></i></button> */}
                <button>
                  <Link to={`/products/${product.id}`} target="_blank">
                    <i class="fa-solid fa-eye"></i>
                  </Link>
                </button>
                {/* <button onClick={() => onEditClick(product)}>Edit</button> */}
                {/* <button onClick={() => onEditClick(product)}>
                  <i class="fa-solid fa-pen-to-square"></i>
                </button> */}
                {/* <button onClick={() => onDeleteClick(product.id)}>Delete</button> */}
                <button onClick={() => onDeleteClick(product.id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
