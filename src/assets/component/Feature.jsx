
// import "../styles/Feature.css";


// function Feature() {
//     return(
//         <></>
//     );
// }

// export default Feature;





// import "../styles/feature.css";

// // ✅ Import your images from src/Images
// import featureImg1 from "../Images/feature-img-1.png";
// import featureImg2 from "../Images/feature-img-2.png";
// import featureImg3 from "../Images/feature-img-3.png";

// function Feature() {
//   // You can also store features in an array to make the component scalable
//   const features = [
//     {
//       img: featureImg1,
//       title: "Fresh and Organic",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in cupiditate quo dolores et mollitia!",
//     },
//     {
//       img: featureImg2,
//       title: "Free Delivery",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in cupiditate quo dolores et mollitia!",
//     },
//     {
//       img: featureImg3,
//       title: "Easy Payments",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in cupiditate quo dolores et mollitia!",
//     },
//   ];

//   return (
//     <section className="features" id="features">
//       <h1 className="heading">
//         Our <span>Features</span>
//       </h1>

//       <div className="box-container">
//         {features.map((item, index) => (
//           <div className="box" key={index}>
//             <img src={item.img} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//             <a href="#" className="all-btn">
//               Read More
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Feature;





import React from "react";
import "../styles/feature.css";

import featureImg1 from "../images/feature-img-1.png";
import featureImg2 from "../images/feature-img-2.png";
import featureImg3 from "../images/feature-img-3.png";

function Feature() {
  const features = [
    {
      img: featureImg1,
      title: "Fresh and Organic",
      desc: "We bring you farm-fresh vegetables straight from trusted farmers, ensuring 100% natural and chemical-free produce.",
    },
    {
      img: featureImg2,
      title: "Free Delivery",
      desc: "We bring you farm-fresh vegetables straight from trusted farmers, ensuring 100% natural and chemical-free produce.",
    },
    {
      img: featureImg3,
      title: "Easy Payments",
      desc: "Pay securely with multiple options — UPI, Credit/Debit Cards, or Cash on Delivery. Fast, safe, and seamless.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <h1 className="features-heading heading">
        Our <span>Features</span>
      </h1>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-img">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#products" className="feature-btn btn-b">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
