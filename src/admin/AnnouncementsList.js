// AnnouncementsList.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AnnouncementsList() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "announcements"));
        const announcementsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAnnouncements(announcementsData);
      } catch (error) {
        console.error("Error fetching announcements: ", error.message);
      }
    };



    fetchAnnouncements();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleDelete = async (announcementId) => {
    try {
      await deleteDoc(doc(db, "announcements", announcementId));
      setAnnouncements((prevAnnouncements) =>
        prevAnnouncements.filter(
          (announcement) => announcement.id !== announcementId
        )
      );
      toast.success("Announcement deleted successfully");
    } catch (error) {
      console.error("Error deleting announcement: ", error.message);
      toast.error(`Error deleting announcement: ${error.message}`);
    }
  };

  return (
    <div className="product_list">
      <h1>Announcements List</h1>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <strong>{announcement.title}</strong> - {announcement.subtitle} (
            {announcement.date})
            <button onClick={() => handleDelete(announcement.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AnnouncementsList;
