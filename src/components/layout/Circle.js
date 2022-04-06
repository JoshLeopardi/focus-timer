import classes from "./Circle.module.css";

export default function Circle(props) {
  return (
    <div className={classes.circle}>
      <p className={classes.insidecircle}>{props.children}</p>
    </div>
  );
}
