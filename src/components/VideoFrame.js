// // Import necessary dependencies
// import React, { useEffect, useState } from 'react';
// import { db } from '../firebase-config';
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
// } from 'firebase/firestore';

// const VideoDisplay = () => {
//     const [videoLink, setVideoLink] = useState('');
  
//     useEffect(() => {
//       // Reference to the 'videos' collection
//       const videosCollection = collection(db, 'videos');
  
//       // Create a query to get the latest video
//       const q = query(videosCollection, orderBy('createdAt', 'desc'), limit(1));
  
//       // Subscribe to changes in the query results
//       const unsubscribe = onSnapshot(q, (snapshot) => {
//         if (!snapshot.empty) {
//           const latestVideo = snapshot.docs[0].data();
//           console.log('Latest Video:', latestVideo);
  
//           // Ensure that the 'link' property exists in the latest video data
//           if (latestVideo && latestVideo.link) {
//             setVideoLink(latestVideo.link);
//           } else {
//             console.error('Invalid or missing link in the latest video data.');
//           }
//         } else {
//           console.log('No documents found in the "videos" collection.');
//         }
//       }, (error) => {
//         console.error('Error fetching documents:', error);
//       });
  
//       // Clean up the subscription when the component unmounts
//       return () => unsubscribe();
//     }, []);
  
//     return (
//       <div>
//         {videoLink && (
//           <iframe
//             title="YouTube Video"
//             width="560"
//             height="315"
//             src={videoLink}
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         )}
//       </div>
//     );
//   };
  
//   export default VideoDisplay;





// Import necessary dependencies
// import React, { useEffect, useState } from 'react';
// import { db } from '../firebase-config';
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
// } from 'firebase/firestore';

// const VideoDisplay = () => {
//   const [videoLink, setVideoLink] = useState('');

//   useEffect(() => {
//     // Reference to the 'videos' collection
//     const videosCollection = collection(db, 'videos');

//     // Create a query to get the latest video
//     const q = query(videosCollection, orderBy('createdAt', 'desc'), limit(1));

//     // Subscribe to changes in the query results
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       if (!snapshot.empty) {
//         const latestVideo = snapshot.docs[0].data();
//         console.log('Latest Video:', latestVideo);

//         // Ensure that the 'link' property exists in the latest video data
//         if (latestVideo && latestVideo.link) {
//           setVideoLink(latestVideo.link);
//         } else {
//           console.error('Invalid or missing link in the latest video data.');
//         }
//       } else {
//         console.log('No documents found in the "videos" collection.');
//       }
//     }, (error) => {
//       console.error('Error fetching documents:', error);
//     });

//     // Clean up the subscription when the component unmounts
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       {videoLink && (
//         <iframe
//           title="YouTube Video"
//           width="560"
//           height="315"
//         //   src={videoLink}
//           src="https://www.youtube.com/embed/tgbNymZ7vqY"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default VideoDisplay;


import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore';
const VideoDisplay = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Reference to the 'videos' collection
    const videosCollection = collection(db, 'videos');

    // Create a query to get all videos, ordered by createdAt in descending order
    const q = query(videosCollection, orderBy('createdAt', 'desc'));

    // Subscribe to changes in the query results
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const videoList = snapshot.docs.map((doc) => doc.data());
        console.log('Video List:', videoList);

        setVideos(videoList);
      } else {
        console.log('No documents found in the "videos" collection.');
      }
    }, (error) => {
      console.error('Error fetching documents:', error);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {videos.map((video, index) => (
        <div className='video_list' key={index}>
          {video.link && (
            // <iframe
            //   title={`YouTube Video ${index + 1}`}
            //   width="560"
            //   height="315"
            //   src={video.link}
            //   frameBorder="0"
            //   allowFullScreen
            // ></iframe>
            <iframe
              title={`YouTube Video ${index + 1}`}
              width="1120"
              height="630"
              src={video.link}
              frameBorder="0"
              allowFullScreen
              className="video_frame"
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoDisplay;