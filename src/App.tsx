import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.scss";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <Layout />
      <SpeedInsights />
    </div>
  );
}

export default App;
