import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/home";
import BasicProfile from "@pages/main/BasicProfile/basicProfile";
import TeamProfile from "@pages/main/TeamProfile/teamProfile";
import IndividualProfile from "@pages/main/IndividualProfile/individualProfile";
import ComponentGroup from "@pages/ComponentGroup/ComponentGroup";
import Profiles from "@pages/Profiles/profiles";
import { MobileView, BrowserView } from "react-device-detect";
import Mobile from "@pages/Mobile/mobile";

function App() {
  return (
    <div>
      <MobileView>
        <Mobile></Mobile>
      </MobileView>
      <BrowserView>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ComponentGroup" element={<ComponentGroup />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/basic" element={<BasicProfile />} />
          <Route path="/team" element={<TeamProfile />} />
          <Route path="/individual" element={<IndividualProfile />} />
        </Routes>
      </BrowserView>
    </div>
  );
}

export default App;
