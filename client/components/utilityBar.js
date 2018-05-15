import React from "react";
import { Components } from "@reactioncommerce/reaction-components";

const UtilityBar = (props, context) => {
  const visibility = {
    hamburger: false,
    brand: false,
    tags: false,
    search: false,
    notifications: false,
    languages: false,
    currency: false,
    mainDropdown: true,
    cartContainer: false
  };
  const newProps = {
    ...props,
    visibility
  };
  return (
    <div className={"utility-bar"}>
      <div className={"utility-bar-social"}>{"#Follow us on"}&nbsp; &nbsp; <a href="http://www.facebook.com/thegtagamer"><i className={"fa fa-facebook"}></i></a>&nbsp; <a href="http://www.twitter.com/thegtagamer"><i className={"fa fa-twitter"}></i></a>&nbsp; <a href="http://www.instagram.com/thegtagamer"><i className={"fa fa-instagram"}></i></a> &nbsp; <a href="http://www.youtube.com/thegtagamer"><i className={"fa fa-youtube"}></i></a></div>
    
      <div className={"utility-bar__main"}>
        {React.createElement(Components.NavBar, newProps, context)}
      </div>
    </div>
  );
};

export default UtilityBar;
