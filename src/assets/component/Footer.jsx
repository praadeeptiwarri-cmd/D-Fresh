
// import "../styles/Footer.css";


// function Footer() {
//     return(
//         <></>
//     );
// }

// export default Footer;








// import React from "react";
// import "../styles/footer.css"; // Create CSS file
// import PaymentImg from "../images/payment.png"; // Adjust path if needed
// import { FaShoppingBasket, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
// import { FaTwitter, FaWhatsapp, FaFacebookF, FaGoogle } from "react-icons/fa";

// function Footer() {
//   return (
//     <section className="footer">
//       <div className="box-container">

//         <div className="box">
//           <h3>Groco <FaShoppingBasket /></h3>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, accusamus cupiditate. Velit assumenda rerum magnam?</p>

//           <div className="share">
//             <a href="#" className="social-icon"><FaTwitter /></a>
//             <a href="#" className="social-icon"><FaWhatsapp /></a>
//             <a href="#" className="social-icon"><FaFacebookF /></a>
//             <a href="#" className="social-icon"><FaGoogle /></a>
//           </div>
//         </div>

//         <div className="box">
//           <h3>Contact Info</h3>
//           <a href="#" className="links"><FaPhone /> +91 887419927</a>
//           <a href="#" className="links"><FaPhone /> +91 887419927</a>
//           <a href="#" className="links"><FaEnvelope /> merabussiness2021@gmail.com</a>
//           <a href="#" className="links"><FaMapMarkerAlt /> Lucknow, UP, India</a>
//         </div>

//         <div className="box">
//           <h3>Quick Links</h3>
//           <a href="#" className="links"><FaArrowRight /> Home</a>
//           <a href="#" className="links"><FaArrowRight /> Features</a>
//           <a href="#" className="links"><FaArrowRight /> Products</a>
//           <a href="#" className="links"><FaArrowRight /> Category</a>
//           <a href="#" className="links"><FaArrowRight /> Review</a>
//           <a href="#" className="links"><FaArrowRight /> Blogs</a>
//         </div>

//         <div className="box">
//           <h3>Newsletter</h3>
//           <p>Subscribe for Latest Updates</p>
//           <input type="email" placeholder="Your Email" className="email" />
//           <input type="submit" value="Subscribe" className="btn" />
//           <img src={PaymentImg} className="payment-img" alt="Payment Options" />
//         </div>

//       </div>

//       <div className="credit">Created By <span>Pradeep Tiwari</span> | All Rights Reserved</div>
//     </section>
//   );
// }

// export default Footer;






import React from "react";
import "../styles/footer.css";
import PaymentImg from "../images/payment.png";
import {
  FaShoppingBasket,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-box about">
          <h3 className="footer-title">
            D-Fresh <FaShoppingBasket />
          </h3>
          <p>
            Delivering the freshest and finest vegetables, fruits, and organic
            produce straight to your door. Eat healthy, stay fresh.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
            <a href="#" aria-label="WhatsApp" className="social-icon"><FaWhatsapp /></a>
            <a href="#" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
            <a href="#" aria-label="Google" className="social-icon"><FaGoogle /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-box contact">
          <h3 className="footer-title">Contact Info</h3>
          <a href="tel:+91887419927" className="footer-link"><FaPhone /> +91 887419927</a>
          <a href="mailto:merabussiness2021@gmail.com" className="footer-link"><FaEnvelope /> merabussiness2021@gmail.com</a>
          <a href="#" className="footer-link"><FaMapMarkerAlt /> Lucknow, UP, India</a>
          <a href="#" className="btn-a">Click Here to Contact</a>
        </div>

        {/* Quick Links */}
        <div className="footer-box quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <a href="#home" className="footer-link"><FaArrowRight /> Home</a>
          <a href="#features" className="footer-link"><FaArrowRight /> Features</a>
          <a href="#products" className="footer-link"><FaArrowRight /> Products</a>
          <a href="#categories" className="footer-link"><FaArrowRight /> Category</a>
          <a href="#review" className="footer-link"><FaArrowRight /> Review</a>
          <a href="#blogs" className="footer-link"><FaArrowRight /> Blogs</a>
        </div>

        {/* Newsletter */}
        <div className="footer-box newsletter">
          <h3 className="footer-title">Newsletter</h3>
          <p>Subscribe for latest updates and offers!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" className="email" required />
            <button type="submit" className="btn-a">Subscribe</button>
          </form>
          <img src={PaymentImg} alt="Payment Options" className="payment-img" />
        </div>
      </div>

      <div className="credit">
        © {new Date().getFullYear()} Created by <span>Pradeep Tiwari</span> | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
