import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import SetUpFocusTimer from "./components/pages/SetUpFocusSession";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SetUpFocusTimer" element={<SetUpFocusTimer />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
