// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function ContactUs() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>{id ? `User: ${id}` : "Contact Us"}</h2>
//       {id && (
//         <p>
//           This page reads the <code>id</code> from the URL using <code>useParams()</code>.
//         </p>
//       )}
//       <button onClick={() => navigate(-1)}>Go back</button>
//       <button style={{ marginLeft: 8 }} onClick={() => navigate("/")}>
//         Go home
//       </button>
//     </div>
//   );
// }

export default function ContactUs() {
  return (
    <div className="page">
      <h2>Contact</h2>
      <p>Contact page content here. Try using the back button to observe the exit animation.</p>
    </div>
  );
}