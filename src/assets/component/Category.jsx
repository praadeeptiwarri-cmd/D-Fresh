
// import "../styles/Category.css";


// function Category() {
//     return(
//         <></>
//     );
// }

// export default Category;




// import "../styles/category.css";

// // Import images from src/Images
// import Cat1 from "../Images/cat-1.jpg";
// import Cat2 from "../Images/cat-2.jpg";
// import Cat3 from "../Images/cat-3.jpg";
// import Cat4 from "../Images/cat-4.jpg";

// function Category() {
//   const categories = [
//     { img: Cat1, title: "Vegetables", offer: "Upto 45% off" },
//     { img: Cat2, title: "Fresh Fruits", offer: "Upto 45% off" },
//     { img: Cat3, title: "Dairy Products", offer: "Upto 45% off" },
//     { img: Cat4, title: "Snacks", offer: "Upto 45% off" },
//     { img: Cat1, title: "Vegetables", offer: "Upto 45% off" },
//     { img: Cat2, title: "Fresh Fruits", offer: "Upto 45% off" },
//     { img: Cat3, title: "Dairy Products", offer: "Upto 45% off" },
//     { img: Cat4, title: "Snacks", offer: "Upto 45% off" },
//     { img: Cat1, title: "Vegetables", offer: "Upto 45% off" },
//     { img: Cat2, title: "Fresh Fruits", offer: "Upto 45% off" },
//     { img: Cat3, title: "Dairy Products", offer: "Upto 45% off" },
//     { img: Cat4, title: "Snacks", offer: "Upto 45% off" },
//   ];

//   return (
//     <section className="categories" id="categories">
//       <h1 className="heading">
//         Product <span>Categories</span>
//       </h1>

//       <div className="box-container">
//         {categories.map((cat, index) => (
//           <div className="box" key={index}>
//             <img src={cat.img} alt={cat.title} />
//             <h3>{cat.title}</h3>
//             <p>{cat.offer}</p>
//             <a href="/" target="_blank" className="btn">
//               Shop Now
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Category;








import React from "react";
import "../styles/category.css";

// ✅ Import images correctly
import Cat1 from "../images/cat-1.jpg";
import Cat2 from "../images/cat-2.jpg";
import Cat3 from "../images/cat-3.jpg";
import Cat4 from "../images/cat-4.jpg";

function Category() {
  const categories = [
    { img: Cat1, title: "Vegetables", offer: "Up to 45% Off" },
    { img: Cat2, title: "Fresh Fruits", offer: "Up to 45% Off" },
    { img: Cat3, title: "Dairy Products", offer: "Up to 45% Off" },
    { img: Cat4, title: "Snacks", offer: "Up to 45% Off" },
    { img: Cat1, title: "Vegetables", offer: "Up to 45% Off" },
    { img: Cat2, title: "Fresh Fruits", offer: "Up to 45% Off" },
    { img: Cat3, title: "Dairy Products", offer: "Up to 45% Off" },
    { img: Cat4, title: "Snacks", offer: "Up to 45% Off" },
    { img: Cat1, title: "Vegetables", offer: "Up to 45% Off" },
    { img: Cat2, title: "Fresh Fruits", offer: "Up to 45% Off" },
    { img: Cat3, title: "Dairy Products", offer: "Up to 45% Off" },
    { img: Cat4, title: "Snacks", offer: "Up to 45% Off" },
  ];

  return (
    <section className="categories-section" id="categories">
      <h1 className="categories-heading heading">
        Product <span>Categories</span>
      </h1>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="category-img">
              <img src={cat.img} alt={cat.title} />
            </div>
            <div className="category-info">
              <h3>{cat.title}</h3>
              <p>{cat.offer}</p>
              <a href="#" className="btn-b">
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;

