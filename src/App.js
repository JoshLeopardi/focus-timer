import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import SetUpFocusTimer from "./components/pages/SetUpFocusSession";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SetUpFocusTimer" element={<SetUpFocusTimer />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
