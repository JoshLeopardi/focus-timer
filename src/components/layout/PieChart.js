import { CanvasJSChart } from "canvasjs-react-charts";
export default function PieChart() {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Weekly Study Chart",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 12,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 20, label: "SOEN 342" },
          { y: 20, label: "SOEN 343" },
          { y: 10, label: "SOEN 345" },
          { y: 50, label: "SOEN 357" },
        ],
      },
    ],
  };
  return (
    <div style={{ width: "90%", margin: "auto auto" }}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}
