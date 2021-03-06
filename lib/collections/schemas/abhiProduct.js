import { Meteor } from "meteor/meteor";
import Schemas from "@reactioncommerce/schemas";
import { Products } from "/lib/collections/index";

const ExtendedSchema = Schemas.Product.extend({
  featuredProductLabel: {
    optional: true,
    type: String
  },
  relatedTag: {
    optional: true,
    type: String,
    autoValue() {
      const isSimpleProduct = this.siblingField("type").value === "simple";
      if (isSimpleProduct && this.operator === "$set") {
        const productHandle = this.siblingField("handle").value;
        const slug = `${productHandle}-related`;
        Meteor.call("createTag", slug);
        return slug;
      }
    }
  }
});

Products.attachSchema(ExtendedSchema, { replace: true, selector: { type: "simple" } });