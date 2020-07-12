import ChallengeList from "./Containers/ChallengeList";
import DailyShop from "./Containers/DailyShop";
import Tournaments from "./Containers/Tournaments.js";

import React from "react";

function Layout() {
  return (
    <div>
      <ChallengeList />
      <Tournaments />
      <DailyShop />
    </div>
  );
}

export default Layout;
