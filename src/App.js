import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import SetUpFocusSession from "./components/pages/SetUpFocusSession";
import FocusSession from "./components/pages/FocusSession";
import ToDoList from "./components/pages/ToDoList";
import Statistics from "./components/pages/Statistics";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SetUpFocusSession" element={<SetUpFocusSession />} />
          <Route path="/FocusSession" element={<FocusSession />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
