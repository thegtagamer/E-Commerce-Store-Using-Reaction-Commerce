import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Logger } from "/server/api";


const methods = {
  "abhishek-shop/requestApproachFromStaff": (email) => {
    check(email, String);

    Logger.info(`Contact person at ${email}`);
  }
};

Meteor.methods(methods);
