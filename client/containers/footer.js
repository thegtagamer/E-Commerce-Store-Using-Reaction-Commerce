import { registerComponent, getHOCs } from "@reactioncommerce/reaction-components";
import AbhiShopFooter from "../components/footer";

registerComponent("AbhiShopFooter", SwagShopFooter, getHOCs("NavBar"));
