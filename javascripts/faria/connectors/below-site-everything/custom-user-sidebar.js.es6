import { ajax } from "discourse/lib/ajax";

export default {
  setupComponent(args, component) {
    if (this.currentUser) {
      ajax("/u/" + this.currentUser.username + ".json").then(function(result) {
        component.set("user", result.user);
      });
    }
  }
};

// moment(date).format
