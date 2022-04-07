import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.header}>
      <p className={classes.headerTitle}>{props.children}</p>
    </div>
  );
}

export default Header;
