import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("nav-menu", {
  tagName: "div.nav-panel",

  panelContents() {
    return this.attach("another-widget");
  },

  html() {
    return this.attach("menu-panel", {
      contents: () => this.panelContents()
    });
  },

  clickOutside() {
    this.sendWidgetAction("toggleNav");
  }
});
