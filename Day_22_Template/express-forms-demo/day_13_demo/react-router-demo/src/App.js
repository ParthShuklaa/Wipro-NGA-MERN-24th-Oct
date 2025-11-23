// import { NavLink, Route, Routes , Link,useLocation } from "react-router-dom";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import NotFound from "./pages/NotFound";
// import ReactRouterBenefits from "./pages/ReactRouterBenefits";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const location = useLocation();
  return (
    <div style={{ maxWidth: 800, margin: '36px auto', padding: '0 16px' }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/AboutUs" style={{ marginRight: 12 }}>AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>
      </nav>

      {/* TransitionGroup watches location changes */}
      <TransitionGroup>
        {/* CSSTransition applies classes for enter/exit using location.pathname as key */}
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={300}
        >
          {/* Use Routes with 'location' so React Router renders the right element */}
          <div className="route-wrapper">
             <Routes location={location}>
              <Route path="/" element={<Home />} />
               <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );


  // return (

    
  //   <div className="app">
  //     <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
  //       <NavLink
  //         to="/"
  //         end
  //         style={({ isActive }) => ({
  //           marginRight: 12,
  //           color: isActive ? "blue" : "black",
  //         })}
  //       >
  //         Home
  //       </NavLink>
  //       <NavLink
  //         to="/AboutUs"
  //         style={({ isActive }) => ({
  //           marginRight: 12,
  //           color: isActive ? "blue" : "black",
  //         })}
  //       >
  //         AboutUs
  //       </NavLink>
  //       <NavLink
  //         to="/ContactUs"
  //         style={({ isActive }) => ({
  //           color: isActive ? "blue" : "black",
  //         })}
  //       >
  //         ContactUs
  //       </NavLink>
  //         <NavLink
  //         to="/ReactRouterBenefits"
  //         style={({ isActive }) => ({
  //           marginRight: 12, marginLeft:12,
  //           color: isActive ? "blue" : "black",
  //         })}
  //       >
  //         react router
  //       </NavLink>
        
  //     </nav>

  //     <main style={{ padding: 12 }}>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/AboutUs" element={<AboutUs />} />
  //         <Route path="/ContactUs" element={<ContactUs />} />
  //         <Route path ="/ReactRouterBenefits" element={<ReactRouterBenefits/>}/>
  //         <Route path="/user/:id" element={<ContactUs />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </main>
  //   </div>
  // );
}

export default App;
