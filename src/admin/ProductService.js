// ProductService.js

import { db, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const uploadImage = async (imageFile) => {
  const imageRef = ref(storage, `images/${imageFile.name}`);
  await uploadBytes(imageRef, imageFile);
  return getDownloadURL(imageRef);
};

const uploadFile1 = async (file) => {
  const file1Ref = ref(storage, `files/file1/${file.name}`);
  await uploadBytes(file1Ref, file);
  return getDownloadURL(file1Ref);
};

const uploadFile2 = async (file) => {
  const file2Ref = ref(storage, `files/file2/${file.name}`);
  await uploadBytes(file2Ref, file);
  return getDownloadURL(file2Ref);
};

const getAllProducts = async () => {
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);
  return productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const addProduct = async (product) => {
  const imageUrl = await uploadImage(product.imageFile);
  const file1Url = await uploadFile1(product.file1);
  const file2Url = await uploadFile2(product.file2);

  const docRef = await addDoc(collection(db, "products"), {
    title: product.title,
    subtitle: product.subtitle,
    brand: product.brand,
    category: product.category,
    description: product.description,
    imageUrl,
    file1Url,
    file2Url,
  });

  return { id: docRef.id, ...product };
};

const editProduct = async (editedProduct) => {
  const { id, imageFile, file1, file2, ...rest } = editedProduct;

  if (imageFile) {
    const imageUrl = await uploadImage(imageFile);
    rest.imageUrl = imageUrl;
  }

  if (file1) {
    const file1Url = await uploadFile1(file1);
    rest.file1Url = file1Url;
  }

  if (file2) {
    const file2Url = await uploadFile2(file2);
    rest.file2Url = file2Url;
  }

  await setDoc(doc(db, "products", id), rest);

  return { id, ...rest };
};

const deleteProduct = async (productId) => {
  await deleteDoc(doc(db, "products", productId));
};

const getAllCategories = async () => {
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);
  
  const categoriesSet = new Set();

  productsSnapshot.forEach((doc) => {
    const category = doc.data().category;
    if (category) {
      categoriesSet.add(category.toLowerCase());
    }
  });

  return Array.from(categoriesSet);
};

const productService = {
  getAllProducts,
  getAllCategories,
  addProduct,
  editProduct,
  deleteProduct,
};

export default productService;
