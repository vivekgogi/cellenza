// import React, { useState } from "react";
// import { db } from "../firebase-config";
// import {
//   collection,
//   addDoc,
// } from "firebase/firestore";

// const AdminPanel = () => {
//   const [videoLink, setVideoLink] = useState("");

//   const handleVideoLinkChange = (event) => {
//     setVideoLink(event.target.value);
//   };

//   const handleSaveVideo = async () => {
//     try {
//       // Save the video link to Firestore
//       const videosCollection = collection(db, "videos");
//       await addDoc(videosCollection, { link: videoLink });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <div>
//       <label>YouTube Video Link:</label>
//       <input type="text" value={videoLink} onChange={handleVideoLinkChange} />
//       <button onClick={handleSaveVideo}>Save Video</button>
//     </div>
//   );
// };

// export default AdminPanel;

// // Import necessary dependencies
// import React, { useState } from "react";
// import { db } from "../firebase-config";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// const AdminPanel = () => {
//   const [videoLink, setVideoLink] = useState("");

//   const handleVideoLinkChange = (event) => {
//     setVideoLink(event.target.value);
//   };

//   const handleSaveVideo = async () => {
//     try {
//       // Save the video link to Firestore with a timestamp
//       const videosCollection = collection(db, "videos");
//       await addDoc(videosCollection, { link: videoLink, createdAt: serverTimestamp() });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <div>
//       <label>YouTube Video Link:</label>
//       <input type="text" value={videoLink} onChange={handleVideoLinkChange} />
//       <button onClick={handleSaveVideo}>Save Video</button>
//     </div>
//   );
// };

// export default AdminPanel;

// // Import necessary dependencies
// import React, { useState } from "react";
// import { db } from "../firebase-config";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// const AdminPanel = () => {
//   const [videoLink, setVideoLink] = useState("");

//   const handleVideoLinkChange = (event) => {
//     setVideoLink(event.target.value);
//   };

//   const handleSaveVideo = async () => {
//     try {
//       // Save the video link to Firestore with a timestamp
//       const videosCollection = collection(db, "videos");
//       await addDoc(videosCollection, { link: videoLink, createdAt: serverTimestamp() });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <div>
//       <label>YouTube Video Link:</label>
//       <input type="text" value={videoLink} onChange={handleVideoLinkChange} />
//       <button onClick={handleSaveVideo}>Save Video</button>
//     </div>
//   );
// };

// export default AdminPanel;

import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AdminPanel = () => {
  const [videoLink, setVideoLink] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videosCollection = collection(db, "videos");
    const q = query(videosCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const videoList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoList);
    });

    return () => unsubscribe();
  }, []);

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleSaveVideo = async () => {
    try {
      const videosCollection = collection(db, "videos");
      await addDoc(videosCollection, {
        link: videoLink,
        createdAt: serverTimestamp(),
      });
      setVideoLink("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      const videoDoc = doc(db, "videos", videoId);
      await deleteDoc(videoDoc);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      <label>YouTube Video Link:</label>
      <input type="text" value={videoLink} onChange={handleVideoLinkChange} />
      <button onClick={handleSaveVideo}>Save Video</button>

      <div>
        <h2>All Videos</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <p>{video.link}</p>
              <button onClick={() => handleDeleteVideo(video.id)}>
                Delete Video
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
