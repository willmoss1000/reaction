import { Meteor } from "meteor/meteor";
import { AnalyticsEvents } from "/lib/collections";
import { Reaction } from "/lib/api";

Meteor.publish("AnalyticsEvents", function () {
  const shopId = Reaction.getUserShopId(this.userId) || Reaction.getShopId();
  if (!shopId) {
    return this.ready();
  }
  return AnalyticsEvents.find({ shopId });
});
