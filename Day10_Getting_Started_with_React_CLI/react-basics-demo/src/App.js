import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Contactus from './components/contactus';

function App() { //  a function component as it is returning us JSX
  const user = "new visitor";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          <h1> Functional Component demo </h1>
          <Welcome name = "Captain America " />
          <Welcome name = "Spider man  " />
          <Welcome name = "Batman " />
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <div>
       <h1> Welcome,{user} </h1>
       <p> This is JSX demo  in action </p>
       <p> JSX should return single parent element </p>
       <p> JSX expression go in between { } </p>
       <p> Attributes in JSX uses camel casing (className, OnClick)</p>

          <h2> calling contact us component </h2>
          <Contactus> this data is coming from a react component created via CLI </Contactus>


      </div>
    </div>

    
  );
}

export default App;
