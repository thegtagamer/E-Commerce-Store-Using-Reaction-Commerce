import React from "react";
import { registerComponent, Components } from "@reactioncommerce/reaction-components";
import UtilityBar from "./utilityBar";


class AbhiShopHeader extends React.Component {
  render() {
    return (
      <div>
        <UtilityBar />
        <Components.NavBar/>
      </div>
    );
  }
}


registerComponent("AbhiShopHeader", AbhiShopHeader);

export default AbhiShopHeader;
