import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookPrevState from './components/HookPrevState'
import HookObject from './components/HookObject'
import HookArray from './components/HookArray'
import Parent from './components/CompCommunicationTest/Parent'
import UseEffectHookCounter from './components/useEffect/HookCounter'
import HookMouse from './components/useEffect/HookMouse'
import MouseContainer from './components/useEffect/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/useEffect/IntervalHookCounter'
import DataFetching from './components/useEffect/DataFetching'
import { ThemeProvider } from './components/useContext/context'
import ToolBar from './components/useContext/ToolBar';
import ParentComponent from './components/usecallback/ParentComponent';
import DocTitle  from './components/customHooks/DocTitle';
import DocTitle2 from './components/customHooks/DocTitleTwo';
import UserForm from './components/customHooks/useInputCustomHook/UserForm'
import Counter from './components/useMemo/Counter';
function App() {

  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#FF0000"
    }
  };
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookPrevState />
      <HookObject />
      <HookArray />
      <Parent /> */}
      {/* <UseEffectHookCounter /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching /> */}
      {/* <ThemeProvider value={themes.dark}>
        <ToolBar />
      </ThemeProvider> */}
      {/* <ParentComponent /> */}
      <DocTitle />
      <DocTitle2 />
      <UserForm />
      <Counter />

    </div>
  );
}

export default App;
