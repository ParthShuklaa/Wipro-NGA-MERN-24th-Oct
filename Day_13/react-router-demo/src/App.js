import logo from './logo.svg';
import './App.css';
// importing pages 
import about from "./pages/about";
import contactUs from "./pages/contactUs";
import home from "./pages/home";

function App() {
  return (

    <div className="app">
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink to="/" end style={({isActive})=>({marginRight:12, color: isActive? 'blue':'black'})}>Home</NavLink>
        <NavLink to="/contactUs" style={({isActive})=>({marginRight:12, color: isActive? 'blue':'black'})}>ContactUs</NavLink>
        <NavLink to="/about" style={({isActive})=>({color: isActive? 'blue':'black'})}>About Us</NavLink>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<about />} />
          <Route path="/contactUs element={<contactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
