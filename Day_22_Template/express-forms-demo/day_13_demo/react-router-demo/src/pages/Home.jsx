// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <p>Welcome! Try the About page or a dynamic User page:</p>
//       <Link to="/user/7">Go to user 7</Link>
//     </div>
//   );
// }
import React from 'react';

export default function Home() {
  return (
    <div className="page">
      <h2>Home</h2>
      <p>This is the Home page. Navigate away to see the <strong>exit</strong> transition (transition from).</p>
    </div>
  );
}