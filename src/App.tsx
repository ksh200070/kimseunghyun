import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/home";
import BasicProfile from "@pages/main/BasicProfile/basicProfile";
import TeamProfile from "@pages/main/TeamProfile/teamProfile";
import IndividualProfile from "@pages/main/IndividualProfile/individualProfile";
import ComponentGroup from "@pages/ComponentGroup/ComponentGroup";
import Profiles from "@pages/Profiles/profiles";

function App() {
  return (
    // <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ComponentGroup" element={<ComponentGroup />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/basic" element={<BasicProfile />} />
      <Route path="/team" element={<TeamProfile />} />
      <Route path="/individual" element={<IndividualProfile />} />
    </Routes>
    // </div>
  );
}

export default App;
