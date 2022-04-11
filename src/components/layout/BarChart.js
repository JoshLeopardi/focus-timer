import { CanvasJSChart } from "canvasjs-react-charts";

// function addData(data) {
//   for (var i = 0; i < data.length; i++) {
//     dataPoints.push({
//       x: new Date(data[i].date),
//       y: data[i].units,
//     });
//   }
// }

// // $.getJSON(
// //   "https://canvasjs.com/data/gallery/javascript/daily-sales-data.json",
// //   addData
// // );

export default function BarChart() {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Monthly Focus Minutes",
    },
    data: [
      {
        type: "column",
        startAngle: 75,
        toolTipContent: "{y}%",
        showInLegend: "true",
        legendText: "Months",
        indexLabelFontSize: 12,
        indexLabel: "{y}",
        dataPoints: [
          { y: 20, label: "Jan" },
          { y: 20, label: "Feb" },
          { y: 10, label: "Mar" },
          { y: 50, label: "Apr" },
          { y: 20, label: "May" },
          { y: 20, label: "Jun" },
          { y: 10, label: "Jul" },
          { y: 50, label: "Aug" },
          { y: 20, label: "Sep" },
          { y: 20, label: "Oct" },
          { y: 10, label: "Nov" },
          { y: 50, label: "Dec" },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}
