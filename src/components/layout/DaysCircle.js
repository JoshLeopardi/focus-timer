import Circle from "./Circle";
import classes from "./Circle.module.css";
import moment from "moment";

const daysOfWeek = [
  { day: "Sunday", letter: "S" },
  { day: "Monday", letter: "M" },
  { day: "Tueday", letter: "T" },
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
          console.log("she doesn't even go here!");
          console.log(values);
          return (
            <span className={classes.todaysDay}>
              <Circle>{values.letter}</Circle>
            </span>
          );
        } else {
          return <Circle>{values.letter}</Circle>;
        }
      })}
    </div>
  );
}
