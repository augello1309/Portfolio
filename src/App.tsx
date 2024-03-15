import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Projects from "./routes/Projects";
import ContactInfo from "./routes/ContactInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
      </Routes>
    </>
  );
}
//
export default App;
