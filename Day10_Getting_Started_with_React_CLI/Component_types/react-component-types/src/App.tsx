import React, {
  useState,
  useEffect,
  useRef,
  Component,
  PureComponent,
} from "react";
import "./App.css";

/* ================= 1. Functional Component (with Hooks) ================= */
function FunctionalComponent({ defaultName = "Guest" }: { defaultName?: string }) {
  const [name, setName] = useState(defaultName);

  useEffect(() => {
    console.log("FunctionalComponent mounted/updated — name =", name);
  }, [name]);

  return (
    <div className="card">
      <h3>Functional Component</h3>
      <p>Hello, {name}!</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

/* ================= 2. Class Component ================= */
// here e can dfine a tadiotnal class based cpomponent with state 
// Creating an interface 
interface ClassComponentProps {
  defaultCount?: number;
}
interface ClassComponentState {
  count: number;
}

//Crating a class that inherits above interface 
class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) { // used for inilization default values
    super(props);
    this.state = { count: props.defaultCount ?? 0 };
  }

  render() {
    return ( // returning UI 
      <div className="card">
        <h3>Class Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

/* ================= 3. Pure Component ================= */
// we are avoiding unecesarry re-renders  when props/state care unchnaged (Fast path)

interface PureProps {
  value: number;
}
class PureComponentDemo extends PureComponent<PureProps> {
  render() {
    console.log("PureComponentDemo render — props:", this.props);
    return (
      <div className="card">
        <h3>Pure Component</h3>
        <p>Value prop: {this.props.value}</p>
      </div>
    );
  }
}

/* ================= 4. Higher-Order Component (HOC) ================= */
//its a function that takes component and returns an enhanced component 
//Logs incoming props/value and then renders the wrapped component with the same props 


function withLogger<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: P) => {
    console.log("withLogger — props:", props);
    return <WrappedComponent {...props} />;
  };
}
const FunctionalWithLogger = withLogger(FunctionalComponent);
//FunctionalWithLogger is the FunctionalComponent wrapped by logger; you’ll see log entries each render.


/* ================= 5. Controlled Component ================= */
function ControlledInput() {
  const [value, setValue] = useState("");
  return (
    <div className="card">
      <h3>Controlled Input</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here"
      />
      <p>Current value: {value}</p>
    </div>
  );
}

/* ================= 6. Uncontrolled Component ================= */
function UncontrolledInput() {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    alert("Input value (from DOM): " + (ref.current?.value ?? ""));
  };
  return (
    <div className="card">
      <h3>Uncontrolled Input</h3>
      <input ref={ref} defaultValue="hello" />
      <button onClick={handleClick}>Read value via ref</button>
    </div>
  );
}

/* ================= 7. Error Boundary ================= */
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="card" style={{ backgroundColor: "#fee" }}>
          <h3>Something went wrong.</h3>
          <p>Error caught by Error Boundary.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ================= App Root ================= */
export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>React Component Types Demo (TypeScript + Vite)</h1>

      <FunctionalComponent defaultName="Alice" />
      <ClassComponent defaultCount={2} />
      <PureComponentDemo value={42} />
      <FunctionalWithLogger defaultName="Bob" />
      <ControlledInput />
      <UncontrolledInput />

      <ErrorBoundary>
        <button
          onClick={() => {
            throw new Error("Simulated crash");
          }}
        >
          Trigger Error
        </button>
      </ErrorBoundary>
    </div>
  );
}
