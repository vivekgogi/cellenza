// AnnouncementForm.js
import React, { useState } from "react";
import { db, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AnnouncementForm() {
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementSubtitle, setAnnouncementSubtitle] = useState("");
  const [announcementDescription, setAnnouncementDescription] = useState("");
  const [announcementImage, setAnnouncementImage] = useState(null);
  const [announcementAuthor, setAnnouncementAuthor] = useState(""); // Added
  const [announcementDate, setAnnouncementDate] = useState(""); // Added

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setAnnouncementImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if there is an image selected
      if (!announcementImage) {
        throw new Error("Please select an image for the announcement.");
      }

      // Upload image to Firebase Storage
      const imageRef = ref(storage, `announcements/${announcementImage.name}`);
      await uploadBytes(imageRef, announcementImage);
      const imageUrl = await getDownloadURL(imageRef);

      // Add announcement document to Firestore
      await addDoc(collection(db, "announcements"), {
        title: announcementTitle,
        subtitle: announcementSubtitle,
        description: announcementDescription,
        imageUrl,
        author: announcementAuthor,
        date: announcementDate,
        timestamp: new Date(),
      });

      // Show success toast
      toast.success("Announcement added successfully");

      // Reset form fields
      setAnnouncementTitle("");
      setAnnouncementSubtitle("");
      setAnnouncementDescription("");
      setAnnouncementImage(null);
      setAnnouncementAuthor("");
      setAnnouncementDate("");

      // Delay the page reload by 1 second
      setTimeout(() => {
        // Reload the page after successful upload
        window.location.reload();
      }, 6000);
    } catch (error) {
      console.error("Error submitting announcement form: ", error.message);
      toast.error(`Error adding announcement: ${error.message}`);
    }
  };

  return (
    <div className="product_form">
      <form onSubmit={handleSubmit}>
        <h1>Announcement Form</h1>
        <input
          type="text"
          placeholder="Announcement Title"
          value={announcementTitle}
          onChange={(e) => setAnnouncementTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Announcement Subtitle"
          value={announcementSubtitle}
          onChange={(e) => setAnnouncementSubtitle(e.target.value)}
        />
        <textarea
          placeholder="Announcement Description"
          value={announcementDescription}
          onChange={(e) => setAnnouncementDescription(e.target.value)}
        />
        <label>Announcement Image:</label>
        <input type="file" onChange={handleImageUpload} />
        {/* Added input fields */}
        <label>Author:</label>
        <input
          type="text"
          placeholder="Author"
          value={announcementAuthor}
          onChange={(e) => setAnnouncementAuthor(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="date"
          placeholder="Date"
          value={announcementDate}
          onChange={(e) => setAnnouncementDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AnnouncementForm;
