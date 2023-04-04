import profileContainer from "./pages/profile";
import authContainer from "./pages/auth";
import chatContainer from "./pages/chat";
import errorContainer from "./pages/error";

const router = () => {
  const render = (path) => {
    switch (path) {
      case "/":
        root.innerHTML = authContainer("/");
        break;
      case "/register":
        root.innerHTML = authContainer("register");
        break;
      case "/profile":
        root.innerHTML = profileContainer("profile");
        break;
      case "/profile-edit":
        root.innerHTML = profileContainer("profile-edit");
        break;
      case "/profile-change-password":
        root.innerHTML = profileContainer("profile-change-password");
        break;
      case "/chat":
        root.innerHTML = chatContainer();
        break;
      case "/error":
        root.innerHTML = errorContainer("500");
        break;
      default:
        root.innerHTML = errorContainer("404");
    }
  };

  const routes = [
    {
      path: "/",
    },
    {
      path: "/register",
    },
    {
      path: "/profile",
    },
    {
      path: "/profile-edit",
    },
    {
      path: "/profile-change-password",
    },
    {
      path: "/chat",
    },
    {
      path: "/error",
    },
  ];

  const navLinks = document.querySelectorAll(".nav-link");
  const root = document.getElementById("root");

  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => routerHandler(e));
  });

  function routerHandler(event) {
    event.preventDefault();
    history.pushState({}, "newUrl", event.target.href);
    let route = routes.find((route) => route.path == window.location.pathname);
    if (route && route.path) {
      render(route.path);
    } else {
      render("");
    }
  }

  window.addEventListener("popstate", function () {
    let route = routes.find((route) => route.path == window.location.pathname);
    route ? render(route.path) : render("");
  });

  window.addEventListener("DOMContentLoaded", function () {
    let route = routes.find((route) => route.path == window.location.pathname);
    route ? render(route.path) : render("");
  });
};

export default router;