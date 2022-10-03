import logo from "./logo.svg";
import "./App.css";
import CounterClass from "./components/CounterClassComponent";
import CounterFn from "./components/CounterFnComponent";

function App() {
  return (
    <div>
      <CounterFn />
      <CounterClass />
    </div>
  );
}

export default App;
