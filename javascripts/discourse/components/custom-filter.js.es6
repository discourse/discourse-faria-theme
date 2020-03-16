export default Ember.Component.extend({
  tagName: "",
  content: [
    {
      id: "?order=likes",
      name: "Likes"
    },
    {
      id: "?order=posts",
      name: "Replies"
    },
    {
      id: "?order=activity",
      name: "Latest"
    }
  ],
  filtered: location.search || "?order=activity",

  actions: {
    filterChanged(query) {
      DiscourseURL.routeTo(query);
    }
  }
});
