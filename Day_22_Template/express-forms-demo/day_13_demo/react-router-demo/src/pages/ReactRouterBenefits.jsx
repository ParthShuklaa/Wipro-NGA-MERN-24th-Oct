import React from "react";

export default function ReactRouterBenefits() {
  return (
    <div style={{border:"1px solid black",padding:"10px"}}>
      <h2>Benefits of react router</h2>
      <p><b>Enables Single Page Application (SPA) Behavior</b> <br></br>React Router allows your app to navigate between different components without refreshing the entire page. </p>
<p><b>Declarative Routing</b> <br></br>
Routes are defined declaratively in JSX using Routes and Route components This makes the code more readable and maintainable,  </p>
<p><b>Dynamic and Parameterized Routes</b><br></br>React Router supports dynamic URL segments with parameters, making pages reusable.<br></br>Example: /user/:id can render a User component for different ids.
</p>
<p><b>Conditional Rendering Based on URL</b><br></br>You can render different components based on the current URL.</p>
<p><b>Wildcard & 404 Routes</b><br></br>You can easily handle unknown URLs using * to show a NotFound page.<br></br>
lt Route  path="*" element=br lt  NotFound gt br gt </p>
<p> <b> Lightweight and React-Friendly</b><br></br>It’s designed specifically for React: no extra boilerplate, fully compatible with React hooks and components.</p>
    </div>
  );
}
