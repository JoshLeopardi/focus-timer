import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerTitle}>CUPS Delivery</h1>
    </div>
  );
}

export default Header;
