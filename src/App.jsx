import { createRoot } from "react-dom/client";
import Pet from "./pet";

const App = () => {
  <div>
    <h1>Adopt Me</h1>
    <Pet name="Luna" animal="dog" breed="Havanese" />
    <Pet name="Pepper" animal="bird" breed="Cockatial" />
    <Pet name="Doink" animal="cat" breed="Mixed" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
