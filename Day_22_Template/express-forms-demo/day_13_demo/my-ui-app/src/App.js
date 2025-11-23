// import logo from './logo.svg';

import './App.css';
import {Container , Button } from 'react-bootstrap';
import ComponentCard from './components/ComponentCard';

function App() {
  return (
    // using bootstrap class directly  or via react-bootstrap
    // <div className="container py-4">
    //   <h1 className="mb-3">Bootstrap in React</h1>
    //   <button className="btn btn-primary">Primary Button</button>
    // </div>


    <div  className="container mt-4"> 
<Container className="py-4">
      <h1 className="mb-3">React-Bootstrap</h1>
      <Button variant="success">Success</Button>
    </Container>
    <h3>card components</h3>
    <ComponentCard
    image=""
    title ="my card"
    text="this is simple card demo "
    />

</div>
    


    
  );
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
// };

}

export default App;

