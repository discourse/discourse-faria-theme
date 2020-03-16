import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "",

  location: null,

  router: service(),

  content: computed(function() {
    return [
      {
        id: "likes",
        name: "Likes"
      },
      {
        id: "posts",
        name: "Replies"
      },
      {
        id: "activity",
        name: "Latest"
      }
    ];
  }),

  filtered: computed("router.currentRoute.queryParams.order", function() {
    return this.get("router.currentRoute.queryParams.order") || "activity";
  })
});
