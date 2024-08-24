import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
