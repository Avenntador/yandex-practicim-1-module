import "./profile.scss";

// templates
import uploadAvatar from "./modules/upload_avatar";
import mainProfile from "./modules/main_profile";
import editProfile from "./modules/edit_profile";
import changePassword from "./modules/change_password";
import profileContainerTemplate from "./profileContainer.hbs";

// icons
import arrowLeftIcon from "static/icons/arrowLeftIcon.png";

const profileContainer = (path) => {
  let renderComponent = null;

  if (path === "profile") {
    renderComponent = mainProfile();
  } else if (path === "profile-edit") {
    renderComponent = editProfile();
  } else if (path === "profile-change-password") {
    renderComponent = changePassword();
  }

  const context = {
    arrowLeftIcon,
    renderComponent,
    modal: uploadAvatar(),
  };

  return profileContainerTemplate(context);
};

export default profileContainer;
