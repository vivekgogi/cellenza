// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function DistributorForm() {
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbzrLwmzx_VIFAIR1DXpzPL02Jgx3uLtnE9hWV1XsZVt7UDsG06TO-SeeWekHBzj6e7XYQ/exec",
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
//         <h1>Become a Distributor</h1>
//       </div>
//       <details data-aos="slide-right" data-aos-duration="1500">
//         <summary>
//           Become a <span>Certified Distributor!</span> Tell us about you and
//           your company by filling out the form.{" "}
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

// div className="form_container">
//       <div className="form_header">
//         <h1>Become a Distributor</h1>
//         <h4>
//           Become a <span>Certified Distributor!</span> Tell us about you and
//           your company by filling out the form.
//         </h4>
//       </div>
//       <details>
//         <summary></summary>
//         <form className="form" onSubmit={(e) => Submit(e)}>
//           <input placeholder="Your Name" name="Name" type="text" />
//           <input placeholder="Your Surname" name="Surname" type="text" />
//           <input placeholder="Your Phone" name="Phone" type="number" />
//           <input placeholder="Your Email" name="Email" type="email" />
//           <input placeholder="Your Company" name="Company" type="text" />
//           <input placeholder="Your Website" name="Website" type="text" />
//           <input placeholder="Your City" name="City" type="text" />
//           <input
//             placeholder="Your Postal Code"
//             name="PostalCode"
//             type="number"
//           />
//           <input placeholder="Your State" name="State" type="text" />
//           <input placeholder="Your Country" name="Country" type="text" />
//           <textarea placeholder="Your Message" name="Message" />
//           <button type="submit">Submit</button>
//         </form>
//       </details>
//     </div>

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DistributorForm() {
  return (
    <div className="form_container">
      <div className="form_header" data-aos="fade-in" data-aos-duration="1500">
        <h1>Become a Distributor</h1>
      </div>
      <details data-aos="slide-right" data-aos-duration="1500">
        <summary>
          Become a <span>Certified Distributor!</span> Tell us about you and
          your company by filling out the form.{" "}
          <span>
            <u>CLICK HERE</u>
          </span>
        </summary>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfI9Iz_M8npXsTN42sQJFRIjcNSPcdJ0UqT1kGgD03bku-hkg/viewform?embedded=true"
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
