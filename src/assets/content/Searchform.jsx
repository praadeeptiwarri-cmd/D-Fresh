// import React, { useState } from "react";
// import "../styles/Searchform.css";

// function Searchform() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim() === "") return;
//     alert(`Searching for: ${searchTerm}`);
//     setSearchTerm("");
//   };

//   return (
//     <div className="search-box fade-slide">
//       <form className="search-form container-fluid" onSubmit={handleSubmit}>
//         <input
//           type="search"
//           className="form-control"
//           placeholder="Search fresh products..."
//           aria-label="Search input"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Magnifying glass icon */}
//         <button type="submit" className="search-btn" title="Search">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Searchform;














// src/assets/content/Searchform.jsx
import React from "react";
import "../styles/Searchform.css";

function Searchform({ onClose }) {
  return (
    <div
      className="overlay-panel"
      role="dialog"
      aria-modal="true"
      onClick={(e) =>
        e.target.classList.contains("overlay-panel") && onClose()
      }
    >
      <button
        className="popup-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <div className="search-popup">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            // handle search logic here
          }}
        >
          <input id="search-box" type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchform;
