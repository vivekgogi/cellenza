// ShowAnnouncements.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const ShowAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const announcementsCollection = collection(db, "announcements");
        const annoucementSnapshot = await getDocs(announcementsCollection);
        const announcementsData = annoucementSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Order announcements by timestamp in descending order
        announcementsData.sort((a, b) => b.timestamp - a.timestamp);

        setAnnouncements(announcementsData);
      } catch (error) {
        console.error("Error fetching announcements: ", error.message);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="show_announcements">
      <h1>Announcements</h1>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <h1>{announcement.title}</h1>
            <h3>{announcement.subtitle}</h3>
            <img src={announcement.imageUrl} alt="Announcement" />
            <p>{announcement.description}</p>
            <p>Date: {announcement.timestamp.toDate().toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAnnouncements;
