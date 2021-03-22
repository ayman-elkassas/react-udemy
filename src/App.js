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
import Refs from "./components/14-Refs/refs";
import FocusInput from "./components/15-RefsClass/FocusInput";
import FRParentInput from "./components/16-RefsFunction/FRParentRef";
import Portal from "./components/17-Portal/Portal";
import Hero from "./components/18-ErrorHandling/hero";
import ErrorBoundary from "./components/18-ErrorHandling/errorHandling";
import HOC from "./components/19-HigherOrderComponent/HOC";
import HOCHover from "./components/19-HigherOrderComponent/HOCHover";

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
      {/* <ParentComponent/> */}
      {/* <Refs name="test"/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <Portal/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      <HOC/>
      <HOCHover/>
    </div>
  );
}

export default App;
