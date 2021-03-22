import { Greet } from "./components/1-Components/greet";
import Welcome from "./components/1-Components/welcome";
import Hello from "./components/2-JSX/jsx";
import Props from "./components/3-Props/props";
import State from "./components/4-State/state";
import Click from "./components/5-EventHandling/click";
import Bind from './components/5-EventHandling/bind';
import MethodsAsProps from "./components/3-Props/methodsAsProps";
import ConRender from './components/6-ConitionalRendering/conRender';

//todo:functional stateless component
function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/>
      <Hello/>
      <Props fname="Ahmed" lname="Mohamed"/>
      <State like="25" share="366"/> */}
      {/* <Click/> */}
      {/* <Bind/> */}
      {/* <MethodsAsProps/> */}
      <ConRender/>
    </div>
  );
}

export default App;
