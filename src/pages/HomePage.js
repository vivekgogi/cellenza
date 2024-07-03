// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import HeroCarousel from "../components/HeroCarousel";
// import Gallary from "../components/Gallary";
// import WhoWeAre from "../components/WhoWeAre";
// import WhyChooseUs from "../components/WhyChooseUs";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";
// import MyComponent from "../components/MyComponent";

// function HomePage() {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Adjust the threshold as needed

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1400); // Adjust the threshold as needed
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {isDesktop ? (
//         // Render your website content here
//         <div>
//           <Header />
//           {/* <MyComponent /> */}
//           <HeroCarousel />
//           <Gallary />
//           <WhoWeAre />
//           <WhyChooseUs />
//           {/* <Testimonial /> */}
//           <Footer />
//         </div>
//       ) : (
//         // Display a message for non-desktop devices
//         <p>This website is only accessible on desktop devices.</p>
//       )}
//     </div>
//   );
// }

// export default HomePage;

// import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import Gallary from "../components/Gallary";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";
// import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home_page">
      <Header />
      <HeroCarousel />
      <Gallary />
      <WhoWeAre />
      <WhyChooseUs />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
