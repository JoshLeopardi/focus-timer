import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import SetUpFocusSession from "./components/pages/SetUpFocusSession";
import FocusSession from "./components/pages/FocusSession";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SetUpFocusSession" element={<SetUpFocusSession />} />
          <Route path="/FocusSession" element={<FocusSession />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
