// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react'npm 

import FunctionalComponent from './Components/FunctionalComponent'
import ClassComponent from "./Components/ClassComponent"
import PureComponentDemo from './Components/PureComponentDemo'
import FunctionalWithLogger from './Components/FunctionalWithLogger'

import ControlledInput from './Components/ControlledInput'
import UncontrolledInput from './Components/UncontrolledInput'
// import ErrorBoundary from './Components/ErrorBoundary'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
<h1>React Components — Types Demo (Step-by-step)</h1>

<section>
<h2>1. Functional Component (with Hook)</h2>
<FunctionalComponent name="Alice" />
</section>

<section>
<h2>2. Class Component</h2>
<ClassComponent count={2} />
</section>

  <section>
  <h2>3. Pure Component</h2>
  <PureComponentDemo value={42} />
  {/* <PureComponentDemo counts={0}/> */}
  </section>

<section>
<h2>4. Higher-Order Component (HOC)</h2>
<FunctionalWithLogger name="Bob" />
</section>

<section>
<h2>5. Controlled Component (Form)</h2>
<ControlledInput />
</section>

<section>
<h2>6. Uncontrolled Component (ref)</h2>
<UncontrolledInput />
</section>

<section>
<h2>Error Boundary (Class)</h2>
{/* <ErrorBoundary> */}
{/* inside, render a component that throws when you click */}
<button onClick={() => { throw new Error('Simulated crash') }}>
Click to throw (caught by ErrorBoundary)
</button>
{/* </ErrorBoundary> */}
</section>

<small style={{ display: 'block', marginTop: 20 }}>
Open the console to see HOC logs and other debug messages.
</small>
</div>
    </>
  )
}

export default App
