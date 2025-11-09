
// // src/assets/content/Contact.jsx
// import React, { useState } from "react";
// // import emailjs from "emailjs-com";
// import "../styles/Contact.css";

// function Contact({ isVisible, onClose }) {
//   const [sending, setSending] = useState(false);
//   const [formData, setFormData] = useState({ fullName: "", subject: "", mobile: "", email: "", message: "" });

//   if (!isVisible) return null;

//   const change = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSending(true);
//     emailjs.send(
//       "service_xxxxxx",   // replace
//       "template_yyyyyy",  // replace
//       formData,
//       "your_public_key"   // replace
//     ).then(() => {
//       alert("Message sent — thank you!");
//       setSending(false);
//       onClose();
//     }).catch((err) => {
//       console.error(err);
//       alert("Failed to send — try later.");
//       setSending(false);
//     });
//   };

//   return (
//     <div className="contact-popup-overlay"
//       onClick={(e) =>
//         e.target.classList.contains("contact-popup-overlay") && onClose()
//       }>
//         <button className="popup-close" onClick={onClose}>×</button>
//       <div className="contact-popup">
        
//         <div className="contact-inner">
//           <div className="contact-left">
//             <h2>Get In Touch</h2>
//             <p>We will respond as soon as possible.</p>
//             <div className="contact-info">
//               <p><strong>Phone:</strong> +91 9956397061</p>
//               <p><strong>Email:</strong> merabissiness2021@gmail.com</p>
//               <p><strong>Location:</strong> Lucknow, UP - 226029</p>
//             </div>
//           </div>

//           <div className="contact-right">
//             <form onSubmit={handleSubmit}>
//               <div className="dual">
//                 <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={change} required />
//                 <input name="subject" placeholder="Subject" value={formData.subject} onChange={change} required />
//               </div>
//               <div className="dual">
//                 <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={change} required />
//                 <input name="email" type="email" placeholder="Email" value={formData.email} onChange={change} required />
//               </div>
//               <textarea name="message" placeholder="Message" value={formData.message} onChange={change} required />
//               <button type="submit" className="btn" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;




// src/assets/content/Contact.jsx
import React, { useState } from "react";
import "../styles/Contact.css";
// import emailjs from "emailjs-com"; // uncomment when ready

function Contact({ isVisible, onClose }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    mobile: "",
    email: "",
    message: "",
  });

  if (!isVisible) return null;

  const change = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // await emailjs.send("service_xxx", "template_yyy", formData, "public_key");
      await new Promise((res) => setTimeout(res, 1000)); // mock delay
      setSending(false);
      setSent(true);

      // auto-close after success animation
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setSending(false);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <div
      className="contact-popup-overlay"
      onClick={(e) =>
        e.target.classList.contains("contact-popup-overlay") && onClose()
      }
    >
      <div className="contact-popup">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        {!sent ? (
          <div className="contact-inner">
            {/* Left Side */}
            <div className="contact-left">
              <h2>Get In Touch</h2>
              <p>We’ll respond as soon as possible.</p>
              <div className="contact-info">
                <p>
                  <strong>Phone:</strong> +91 9956397061
                </p>
                <p>
                  <strong>Email:</strong> merabussiness2021@gmail.com
                </p>
                <p>
                  <strong>Location:</strong> Lucknow, UP - 226029
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <div className="dual">
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={change}
                    required
                  />
                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={change}
                    required
                  />
                </div>
                <div className="dual">
                  <input
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={change}
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={change}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={change}
                  required
                />
                <button type="submit" className="btn" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="success-animation">
            <div className="checkmark">
              <div className="checkmark-circle"></div>
              <div className="checkmark-stem"></div>
              <div className="checkmark-kick"></div>
            </div>
            <h3>Message Sent Successfully!</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
