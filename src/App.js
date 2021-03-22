import { Greet } from "./components/1-Components/greet";
import Welcome from "./components/1-Components/welcome";
import Hello from "./components/2-JSX/jsx";
import Props from "./components/3-Props/props";
import State from "./components/4-State/state";
import Click from "./components/5-EventHandling/click";
import Bind from './components/5-EventHandling/bind';
import MethodsAsProps from "./components/3-Props/methodsAsProps";
import ConRender from './components/6-ConitionalRendering/conRender';
import ListRendering from "./components/7-ListRendering/listRendering";
import StyleSheet from "./components/8-Styling/styleSheet";
import FormHandling from "./components/9-FormHandling/FormHandling";
import CompLifeCycle from "./components/10-ComponentLifeCycle/com-lifecycle";
import ParentComponent from "./components/12-PureComponent/parentComponent";

//todo:functional stateless component
function App() {

  return (
    <div className="App">
      {/* name of Component should be capitalize */}
      {/* <Greet/>
      <Welcome/>
      <Hello/>
      <Props fname="Ahmed" lname="Mohamed"/>
      <State like="25" share="366"/> */}
      {/* <Click/> */}
      {/* <Bind/> */}
      {/* <MethodsAsProps/> */}
      {/* <ConRender/> */}
      {/* <ListRendering/> */}
      {/* <StyleSheet primary="primary"/> */}
      {/* <FormHandling/> */}
      {/* <CompLifeCycle/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
