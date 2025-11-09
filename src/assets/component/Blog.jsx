
// import React from "react";
// import "../styles/blog.css";

// import Blog1 from "../images/blog-1.jpg";
// import Blog2 from "../images/blog-2.jpg";
// import Blog3 from "../images/blog-3.jpg";

// function Blog() {
//   const blogData = [
//     {
//       img: Blog1,
//       title: "Fresh and organic vegetables and fruits",
//       user: "My User",
//       date: "05 Oct, 2025",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit accusantium ratione earum perspiciatis.",
//     },
//     {
//       img: Blog2,
//       title: "Fresh and organic vegetables and fruits",
//       user: "My User",
//       date: "05 Oct, 2025",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit accusantium ratione earum perspiciatis.",
//     },
//     {
//       img: Blog3,
//       title: "Fresh and organic vegetables and fruits",
//       user: "My User",
//       date: "05 Oct, 2025",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit accusantium ratione earum perspiciatis.",
//     },
//   ];

//   return (
//     <section className="blogs" id="blogs">
//       <h1 className="heading">
//         our <span>blogs</span>
//       </h1>

//       <div className="box-container">
//         {blogData.map((blog, index) => (
//           <div className="box" key={index}>
//             <img src={blog.img} alt={blog.title} />

//             <div className="content">
//               <div className="icons">
//                 <a href="#">
//                   <i className="fa fa-user"></i> {blog.user}
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-calendar"></i> {blog.date}
//                 </a>
//               </div>

//               <h3>{blog.title}</h3>
//               <p>{blog.desc}</p>
//               <a href="#" className="btn">
//                 read more
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Blog;






import React from "react";
import "../styles/blog.css";

import Blog1 from "../images/blog-1.jpg";
import Blog2 from "../images/blog-2.jpg";
import Blog3 from "../images/blog-3.jpg";

function Blog() {
  const blogs = [
    {
      img: Blog1,
      title: "Fresh and Organic Vegetables and Fruits",
      user: "My User",
      date: "05 Oct, 2025",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit accusantium ratione earum perspiciatis.",
    },
    {
      img: Blog2,
      title: "Healthy Lifestyle with Fresh Vegetables",
      user: "My User",
      date: "10 Oct, 2025",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit accusantium ratione earum perspiciatis.",
    },
    {
      img: Blog3,
      title: "How to Identify Organic Vegetables Easily",
      user: "My User",
      date: "15 Oct, 2025",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit accusantium ratione earum perspiciatis.",
    },
  ];

  return (
    <section className="blog-section" id="blogs">
      <h1 className="blog-heading heading">
        Our <span>Blogs</span>
      </h1>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image">
              <img src={blog.img} alt={blog.title} />
              <div className="overlay"></div>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                <p>
                  <i className="fa fa-user"></i> {blog.user}
                </p>
                <p>
                  <i className="fa fa-calendar"></i> {blog.date}
                </p>
              </div>

              <h3>{blog.title}</h3>
              <p className="blog-desc">{blog.desc}</p>

              <a href="#" className="review-btn btn-b">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
