import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Main from "./pages/main/main";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
