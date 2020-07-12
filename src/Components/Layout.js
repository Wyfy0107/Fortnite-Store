import ChallengeList from "./Containers/ChallengeList";
import DailyShop from "./Containers/DailyShop";
import ShoppingCart from "./Containers/ShoppingCart";
import UpcomingItems from "./Containers/UpcomingItems";

import React from "react";

function Layout() {
  return (
    <div>
      <ChallengeList />
      <UpcomingItems />
      <DailyShop />
    </div>
  );
}

export default Layout;
