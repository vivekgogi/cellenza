// ProductForm.js

import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductForm() {
  const [productTitle, setproductTitle] = useState("");
  const [productSubtitle, setProductSubtitle] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  // Add state variables to track upload status
  const [imageUploadStatus, setImageUploadStatus] = useState(false);
  const [file1UploadStatus, setFile1UploadStatus] = useState(false);
  const [file2UploadStatus, setFile2UploadStatus] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleFile1Upload = (e) => {
    const selectedFile = e.target.files[0];
    setFile1(selectedFile);
  };

  const handleFile2Upload = (e) => {
    const selectedFile = e.target.files[0];
    setFile2(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadingToastId = null;

    try {
      // Show uploading toast
      toast.info("Uploading... Please wait", { autoClose: false });

      // Upload image to Firebase Storage
      const imageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // Upload the PDF file to Firebase Storage
      const file1Ref = ref(storage, `files/${file1.name}`);
      await uploadBytes(file1Ref, file1);
      const file1Url = await getDownloadURL(file1Ref);

      const file2Ref = ref(storage, `files/${file2.name}`);
      await uploadBytes(file2Ref, file2);
      const file2Url = await getDownloadURL(file2Ref);

      // Add product document to Firestore
      const docRef = await addDoc(collection(db, "products"), {
        title: productTitle,
        subtitle: productSubtitle,
        brand: productBrand,
        category: productCategory,
        description: productDescription,
        imageUrl,
        file1Url,
        file2Url,
      });

      // Hide uploading toast and show success toast
      toast.dismiss(uploadingToastId);
      toast.success("Successfully Uploaded");

      // Set upload status to true for each file
      setImageUploadStatus(true);
      setFile1UploadStatus(true);
      setFile2UploadStatus(true);

      // Reset form fields
      setproductTitle("");
      setProductSubtitle("");
      setProductBrand("");
      setProductCategory("");
      setProductDescription("");
      setImageFile(null);
      setFile1(null);
      setFile2(null);

      // Delay the page reload by 1 second
      setTimeout(() => {
        // Reload the page after successful upload
        window.location.reload();
      }, 6000);
    } catch (error) {
      // Handle error and show error toast
      console.error("Error submitting form: ", error.message);
      toast.error("Error uploading data");
    }
  };

  // Move useEffect outside of the handleSubmit function
  useEffect(() => {
    // Check if all files are uploaded successfully
    if (imageUploadStatus && file1UploadStatus && file2UploadStatus) {
      // Perform other actions if needed
    }
  }, [imageUploadStatus, file1UploadStatus, file2UploadStatus]);

  return (
    <div className="product_form">
      <form onSubmit={handleSubmit}>
        <h1>Product Form</h1>
        <div className="title_and_subtitle">
          <input
            type="text"
            placeholder="Product Title"
            value={productTitle}
            onChange={(e) => setproductTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product Subtitle"
            value={productSubtitle}
            onChange={(e) => setProductSubtitle(e.target.value)}
          />
        </div>
        <div className="brand_and_category">
          <input
            type="text"
            placeholder="Product Brand"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product Category"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <label>Product Image:</label>
        <input type="file" onChange={handleImageUpload} />
        <label>Product Datasheet 1:</label>
        <input type="file" onChange={handleFile1Upload} accept=".pdf" />
        <label>Product Datasheet 2:</label>
        <input type="file" onChange={handleFile2Upload} accept=".pdf" />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default ProductForm;
