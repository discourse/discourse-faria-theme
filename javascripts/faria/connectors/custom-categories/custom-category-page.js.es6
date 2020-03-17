import Topic from "discourse/models/topic";
import { withPluginApi } from "discourse/lib/plugin-api";

let catGroups = [];

export default {
  setupComponent(args, component) {
    let parsed = [];

    Ember.run.schedule("afterRender", this, function() {
      // After component renders, add the classes
      if (localStorage.getItem("catGroups") === null) {
        localStorage.setItem("catGroups", JSON.stringify());
      }
      function classToggle() {
        if (catGroups != null) {
          console.log(JSON.parse(localStorage.getItem("catGroups")));
          JSON.parse(localStorage.getItem("catGroups")).forEach(function(cat) {
            $(cat).addClass("hide-children");
          });
        }
      }
      classToggle();
    });

    function parseSettings(settings) {
      settings.split("|").map(i => {
        let seg = $.map(i.split(":"), $.trim);
        let catGroup = seg[0];
        let cats = seg[1];
        parsed.push({ catGroup: catGroup, cats: cats });
      });

      return parsed;
    }

    const parsedSettings = parseSettings(settings.category_groups);
    let categories = this.site.get("categories");

    (function() {
      function buildGroups(categories) {
        let catGroupList = [];

        parsedSettings.forEach(function(obj) {
          window[obj.catGroup] = [];

          categories.forEach(function(category) {
            if (obj.cats.indexOf(category.slug) > -1) {
              window[obj.catGroup].push(category);
            } // Could push ungrouped here?
          });

          catGroupList.push({ name: obj.catGroup, cats: window[obj.catGroup] });
        });

        component.set("catGroupList", catGroupList);
      }
      buildGroups(categories);
    })();
  },

  actions: {
    toggleCats() {
      let id = $(event.target).attr("id");
      var storedCats = JSON.parse(localStorage.getItem("catGroups"));
      if (
        (storedCats != null) &
        (storedCats.indexOf(".custom-group-" + id) > -1)
      ) {
        catGroups.pop(".custom-group-" + id);
        $(".custom-group-" + id).removeClass("hide-children");
        localStorage.setItem("catGroups", JSON.stringify(catGroups));
      } else {
        catGroups.push(".custom-group-" + id);
        $(".custom-group-" + id).addClass("hide-children");
        localStorage.setItem("catGroups", JSON.stringify(catGroups));
      }
    }
  }
};
