// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CollaboratorForm() {
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbzz2luCzXeVY698Bzq1PbqrpbpciKMYHBQMSnu45Tk4ofJEIsure1Wt9m0rRkQdFN0GQw/exec",
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
//         <h1>Collaboration</h1>
//       </div>
//       <details data-aos="slide-right" data-aos-duration="1500">
//         <summary>
//           Teamwork is a must for us and we never say no to a challenge!{" "}
//           <span>Do you have a project</span> that you would like to develop with
//           our help? Fill out the form and let's get in touch!{" "}
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
//           <input placeholder="Your Company" name="Company" type="text" />
//           <input placeholder="Your Website" name="Website" type="text" />
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

export default function CollaboratorForm() {
  return (
    <div className="form_container">
      <div className="form_header" data-aos="fade-in" data-aos-duration="1500">
        <h1>Collaboration</h1>
      </div>
      <details data-aos="slide-right" data-aos-duration="1500">
        <summary>
          Teamwork is a must for us and we never say no to a challenge!{" "}
          <span>Do you have a project</span> that you would like to develop with
          our help? Fill out the form and let's get in touch!{" "}
          <span>
            <u>CLICK HERE</u>
          </span>
        </summary>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSef4c4PpVJ5QSH5zVdYgoouEmCMFnc-Sf61ii6bnJlLUcVONA/viewform?embedded=true"
          width="1150"
          height="2100"
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
