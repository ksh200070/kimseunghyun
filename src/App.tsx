import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import FirstProfile from "./pages/main/FirstProfile/firstProfile";
import SecondProfile from "./pages/main/SecondProfile/secondProfile";
import ThirdProfile from "./pages/main/ThirdProfile/thirdProfile";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/basic" element={<FirstProfile />} />
        <Route path="/student" element={<SecondProfile />} />
        <Route path="/developer" element={<ThirdProfile />} />
      </Routes>
    </div>
  );
}

export default App;
