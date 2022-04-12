import Circle from "./Circle";
import classes from "./Circle.module.css";
import moment from "moment";

const daysOfWeek = [
  { day: "Sunday", letter: "S" },
  { day: "Monday", letter: "M" },
  { day: "Tuesday", letter: "T" },
  { day: "Wednesday", letter: "W" },
  { day: "Thursday", letter: "T" },
  { day: "Friday", letter: "F" },
  { day: "Saturday", letter: "S" },
];

const today = moment().format("dddd");
export default function DaysCircle() {
  return (
    <div className={classes.todaysCircles}>
      {daysOfWeek.map((values) => {
        if (values.day === today) {
          return (
            <span key={values.day} className={classes.todaysDay}>
              <Circle>{values.letter}</Circle>
            </span>
          );
        } else {
          return (
            <span key={values.day}>
              <Circle>{values.letter}</Circle>
            </span>
          );
        }
      })}
    </div>
  );
}
