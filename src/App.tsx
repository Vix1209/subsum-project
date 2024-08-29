import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<p>Route Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
