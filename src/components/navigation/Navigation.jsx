import NavigationLink from "../link/Link";
import styles from "./navigation.module.css";

const Navigation = () => {
  const links = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/blog",
      pathName: "Blog",
    },
    {
      path: "/login",
      pathName: "Login",
    },
    {
      path: "/createpost",
      pathName: "Create",
    },
  ];
  return (
    <div className={styles.navbar}>
      {links.map((link) => (
        <NavigationLink
          key={link.pathName}
          path={link.path}
          pathname={link.pathName}
        />
      ))}
    </div>
  );
};

export default Navigation;
