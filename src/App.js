import "./App.css";
import Display from "./components/Display";
import GetMoney from "./components/GetMoney";
import Heading from "./components/Heading";
import Tracker from "./components/Tracker";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Heading />
        <GetMoney />
        <Tracker />
        <Display />
      </div>
    </GlobalProvider>
  );
}

export default App;
