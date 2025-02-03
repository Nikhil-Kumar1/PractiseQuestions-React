import "./styles.css";
import Tab from "./components/Tab";
import { characters } from "./utils/Data";
export default function App() {
  return (
    <div className="App">
      <Tab resData={characters} />
    </div>
  );
}
