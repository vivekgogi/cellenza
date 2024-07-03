import React, { useState, useEffect } from 'react';
import backgroundImage from "../images/carousel3.jpg";

const testimonialsData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2500); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="testimonial-carousel">
      <div className="carousel-content">
        <img
          className="background-image"
          src={backgroundImage}
          alt="Background"
        />
        <div className="testimonial-text">
          <p>{testimonialsData[activeIndex].text}</p>
          <p className="author">- {testimonialsData[activeIndex].author}</p>
        </div>
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonial;
