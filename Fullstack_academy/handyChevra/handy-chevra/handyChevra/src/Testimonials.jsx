import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Excellent service! Highly recommend for any handyman needs.",
  },
  {
    name: "Jane Smith",
    feedback:
      "Professional and reliable. Did a great job with my plumbing issues.",
  },
  {
    name: "Sam Wilson",
    feedback:
      "Quick and efficient. Will definitely call again for future repairs.",
  },
];

function Testimonials() {
  return (
    <div className="Testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <p>
              <strong>{testimonial.name}</strong>
            </p>
            <p>{testimonial.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testimonials;
