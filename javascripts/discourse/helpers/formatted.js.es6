import { registerUnbound } from "discourse-common/lib/helpers";

registerUnbound("formatted", function(dt) {
  dt = moment(dt).format("MMM D, YYYY");
  return new Handlebars.SafeString(dt);
});
