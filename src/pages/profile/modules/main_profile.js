import mainProfileTemplate from "./templates/main_profile.hbs";
import avatarIcon from "static/icons/avatarIcon.png";

const mainProfile = () => {
  const context = {
    avatarIcon,
  };

  return mainProfileTemplate(context);
};

export default mainProfile;
