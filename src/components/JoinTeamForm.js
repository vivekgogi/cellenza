// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function JoinTeamForm() {
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwQWYw_hH1HBdx24gwHo6qDeBin01iD0HhPJzE4UvSGR1NJLQKaSNW4SNC_MLTdVQe3/exec",
//       {
//         method: "POST",
//         body: formDatab,
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         // Assuming the response includes a success property
//         if (data.success) {
//           toast.success("Data uploaded successfully!");
//         } else {
//           toast.error("Failed to upload data.");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error("An error occurred while uploading data.");
//       });
//   }
//   return (
//     <div className="form_container">
//       <div
//         className="form_header"
//         data-aos="fade-in"
//         data-aos-duration="1500"
//       >
//         <h1>Join our Team</h1>
//       </div>
//       <details data-aos="slide-right" data-aos-duration="1500">
//         <summary>
//           We are constantly looking for determined and motivated players to join
//           our team. We offer you a dynamic workplace for you to grow and fulfill
//           your potential. <span>Do you want to join our team?</span> Fill out
//           the form.{" "}
//           <span>
//             <u>CLICK HERE</u>
//           </span>
//         </summary>
//         <form className="form" onSubmit={(e) => Submit(e)}>
//           <input placeholder="Your Name *" name="Name" type="text" required />
//           <input
//             placeholder="Your Surname *"
//             name="Surname"
//             type="text"
//             required
//           />
//           <input placeholder="Your Phone *" name="Phone" type="text" required />
//           <input
//             placeholder="Your Email *"
//             name="Email"
//             type="email"
//             required
//           />
//           <input placeholder="Your City" name="City" type="text" />
//           <input placeholder="Your Postal Code" name="PostalCode" type="text" />
//           <input placeholder="Your State" name="State" type="text" />
//           <input
//             placeholder="Your Country *"
//             name="Country"
//             type="text"
//             required
//           />
//           <textarea placeholder="Your Message" name="Message" />
//           <button type="submit">Submit</button>
//         </form>
//       </details>
//     </div>
//   );
// }
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JoinTeamForm() {
  return (
    <div className="form_container">
      <div className="form_header" data-aos="fade-in" data-aos-duration="1500">
        <h1>Join our Team</h1>
      </div>
      <details data-aos="slide-right" data-aos-duration="1500">
        <summary>
          We are constantly looking for determined and motivated players to join
          our team. We offer you a dynamic workplace for you to grow and fulfill
          your potential. <span>Do you want to join our team?</span> Fill out
          the form.{" "}
          <span>
            <u>CLICK HERE</u>
          </span>
        </summary>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScz4SQQfVah7HHwVF-_MIW1ylcCB5JCh-dTFG5ChRHQo8mSbg/viewform?embedded=true"
          width="1150"
          height="375"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </details>
    </div>
  );
}
