//Common
import color from "./common/color";
import theme from "./common/theme";
//Modules
import login from "./modules/login.i18n";
import home from "./modules/home.i18n";
import project from "./modules/project.i18n";

export default {
  common: {
    please_wait: "Please wait",
    log_out: "Log Out",
    saved: "Saved",
    settings: "Settings",
    banner: "Banner",
    collection: "Collection",
    connection: "Connection",
    everything_is_ok: "Everything is OK",
    success: "Success",
    categories: "Categories",
    select: "Select",
    close: "Close",
  },
  navigation: {
    project: "Project",
  },
  theme,
  color,

  login,
  home,
  project,

  error: {
    invalid_email: "Invalid email",
    this_field_is_required: "This field is required",
    create_data: "Oops, something went wrong",
  },
};
