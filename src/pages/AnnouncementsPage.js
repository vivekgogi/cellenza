import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Training() {
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
    <div className="private_label_section">
      <div
        className="contact_header"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>Announcements</h1>
        <h6>📢 Discover the Latest News and Developments at Cellenza. 📢</h6>
        <p>
          Explore our Announcements page for the latest updates, news, and
          exciting developments at Cellenza. Stay informed and connected with
          our dynamic journey of innovation and progress.
        </p>
      </div>

      <div className="announcement_container">
        <ul>
          {announcements.map((announcement) => (
            <li key={announcement.id}>
              <details data-aos="slide-right" data-aos-duration="1500">
                <summary>
                  <div className="announcement-heading">
                    <h1>{announcement.title}</h1>
                    <h4>{announcement.subtitle}</h4>
                  </div>
                  <p>{announcement.timestamp.toDate().toLocaleDateString()}</p>
                </summary>

                <img src={announcement.imageUrl} alt="Announcement" />
                <p>{announcement.description}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TrainingPage() {
  return (
    <div className="private_label_page">
      <Header />
      <Training />
      <Footer />
    </div>
  );
}
