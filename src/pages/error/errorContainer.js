import "./error.scss";
import errorTemplate from "./error.hbs";

const errorContainer = () => {
  const context = {
    errorNumber: "500",
  };

  return errorTemplate(context);
};

export default errorContainer;
