

// import "../styles/Review.css";


// function Review() {
//     return(
//         <></>
//     );
// }

// export default Review;





// import React, { useState } from "react";
// import "../styles/review.css";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// import Pic1 from "../Images/pic-1.png";
// import Pic2 from "../Images/pic-2.png";
// import Pic3 from "../Images/pic-3.png";
// import Pic4 from "../Images/pic-4.png";

// function Review() {
//   const reviews = [
//     {
//       img: Pic1,
//       name: "Pradeep Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic2,
//       name: "Dileep Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic3,
//       name: "Pankaj Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic4,
//       name: "Abhishek Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic1,
//       name: "Ravi Sharma",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const visibleCount = 4; // number of boxes per view

//   const nextReview = () => {
//     if (current < reviews.length - visibleCount) {
//       setCurrent((prev) => prev + 1);
//     }
//   };

//   const prevReview = () => {
//     if (current > 0) {
//       setCurrent((prev) => prev - 1);
//     }
//   };

//   return (
//     <section className="review" id="review">
//       <h1 className="heading">
//         Customers <span>Review</span>
//       </h1>

//       <div className="review-slider">
//         <button className="prev" onClick={prevReview}>
//           &#10094;
//         </button>

//         <div className="wrapper">
//           <div
//             className="slider-track"
//             style={{
//               transform: `translateX(-${current * 25}%)`,
//             }}
//           >
//             {reviews.map((review, index) => (
//               <div className="box" key={index}>
//                 <img src={review.img} alt={review.name} />
//                 <p>{review.text}</p>
//                 <h3>{review.name}</h3>
//                 <div className="stars">
//                   {[...Array(Math.floor(review.rating))].map((_, i) => (
//                     <FaStar key={i} color="#f39c12" />
//                   ))}
//                   {review.rating % 1 !== 0 && <FaStarHalfAlt color="#f39c12" />}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="next" onClick={nextReview}>
//           &#10095;
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Review;










// import React, { useState } from "react";
// import "../styles/review.css";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// import Pic1 from "../images/pic-1.png";
// import Pic2 from "../images/pic-2.png";
// import Pic3 from "../images/pic-3.png";
// import Pic4 from "../images/pic-4.png";

// function Review() {
//   const reviews = [
//     {
//       img: Pic1,
//       name: "Pradeep Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic2,
//       name: "Dileep Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic3,
//       name: "Pankaj Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic4,
//       name: "Abhishek Tiwari",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//     {
//       img: Pic1,
//       name: "Ravi Sharma",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
//       rating: 4.5,
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const visibleCount = 4;

//   const nextReview = () => {
//     if (current < reviews.length - visibleCount) {
//       setCurrent((prev) => prev + 1);
//     }
//   };

//   const prevReview = () => {
//     if (current > 0) {
//       setCurrent((prev) => prev - 1);
//     }
//   };

//   return (
//     <section className="review-section" id="review">
//       <h1 className="review-heading heading">
//         Customers <span>Review</span>
//       </h1>

//       <div className="review-slider">
//         <button
//           className={`slider-btn prev ${current === 0 ? "disabled" : ""}`}
//           onClick={prevReview}
//         >
//           &#10094;
//         </button>

//         <div className="review-wrapper">
//           <div
//             className="slider-track"
//             style={{
//               transform: `translateX(-${current * 25}%)`,
//             }}
//           >
//             {reviews.map((review, index) => (
//               <div className="review-card" key={index}>
//                 <img src={review.img} alt={review.name} />
//                 <p>{review.text}</p>
//                 <h3>{review.name}</h3>
//                 <div className="stars">
//                   {[...Array(Math.floor(review.rating))].map((_, i) => (
//                     <FaStar key={i} color="#f39c12" />
//                   ))}
//                   {review.rating % 1 !== 0 && <FaStarHalfAlt color="#f39c12" />}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className={`slider-btn next ${
//             current >= reviews.length - visibleCount ? "disabled" : ""
//           }`}
//           onClick={nextReview}
//         >
//           &#10095;
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Review;






import React, { useState } from "react";
import "../styles/review.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import Pic1 from "../images/pic-1.png";
import Pic2 from "../images/pic-2.png";
import Pic3 from "../images/pic-3.png";
import Pic4 from "../images/pic-4.png";

function Review() {
  const reviews = [
    {
      img: Pic1,
      name: "Pradeep Tiwari",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
      rating: 4.5,
    },
    {
      img: Pic2,
      name: "Dileep Tiwari",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
      rating: 4.5,
    },
    {
      img: Pic3,
      name: "Pankaj Tiwari",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
      rating: 4.5,
    },
    {
      img: Pic4,
      name: "Abhishek Tiwari",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
      rating: 4.5,
    },
    {
      img: Pic1,
      name: "Ravi Sharma",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ex et veritatis doloremque officiis.",
      rating: 4.5,
    },
  ];

  const visibleCount = 4;
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < reviews.length - visibleCount) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };


  return (
    <section className="review-section" id="review">
      <h1 className="review-heading heading">
        Customers <span>Review</span>
      </h1>

      <div className="review-container">
        <button
          className={`nav-btn prev ${index === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
          aria-label="Previous Reviews"
        >
          &#10094;
        </button>

        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {reviews.map((review, i) => (
              <div className="review-card" key={i}>
                <div className="avatar">
                  <img src={review.img} alt={review.name} />
                </div>
                <p className="review-text">{review.text}</p>
                <h3 className="reviewer-name">{review.name}</h3>
                <div className="stars">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} color="#ffb703" />
                  ))}
                  {review.rating % 1 !== 0 && <FaStarHalfAlt color="#ffb703" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`nav-btn next ${
            index >= reviews.length - visibleCount ? "disabled" : ""
          }`}
          onClick={nextSlide}
          aria-label="Next Reviews"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Review;
