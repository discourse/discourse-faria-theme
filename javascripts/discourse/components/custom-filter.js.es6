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
        id: "activity",
        name: "Recently Updated"
      },
      {
        id: "likes",
        name: "Most Liked"
      },
      {
        id: "posts",
        name: "Most Replies"
      }
    ];
  }),

  filtered: computed("router.currentRoute.queryParams.order", function() {
    return this.get("router.currentRoute.queryParams.order") || "activity";
  })
});
