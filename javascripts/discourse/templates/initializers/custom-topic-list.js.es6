import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "custom-topic-list",
  initialize() {
    withPluginApi("0.8.7", api => {
      api.modifyClass("component:topic-list", {
        hasPinnedTopics: function() {
          const pinnedTopics = this.topics.filter(topic => topic.pinned);
          return pinnedTopics.length > 0;
        }.property(),

        isDiscoveryList: function() {
          return this.parentView.attrs.model;
        }.property(),

        isCategoryList: function() {
          return this.attrs.category && this.attrs.category.value;
        }.property(),

        category: function() {
          return this.attrs.category.value;
        }.property()
      });

      api.modifyClass("component:topic-list-item", {
        isDiscoveryList: function() {
          return this.parentView.attrs.model;
        }.property()
      });

      api.modifyClass("component:topic-list", {
        click(e) {
          var self = this;
          var onClick = function(sel, callback) {
            var target = $(e.target).closest(sel);

            if (target.length === 1) {
              callback.apply(self, [target]);
            }
          };

          onClick("button.bulk-select", function() {
            this.toggleBulkSelect();
            this.rerender();
          });

          onClick("button.bulk-select-all", function() {
            $("input.bulk-select:not(:checked)").click();
          });

          onClick("button.bulk-clear-all", function() {
            $("input.bulk-select:checked").click();
          });

          onClick("th.sortable", function(e2) {
            this.changeSort(e2.data("sort-order"));
            this.rerender();
          });

          // custom
          onClick("div.sortable", function(e2) {
            this.changeSort(e2.data("sort-order"));
            this.rerender();
          });
        }
      });
    });
  }
};
