import '../App.css';
import { Chart } from "react-google-charts";


export const column_data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export const line_data = [
  [
    { type: "date", label: "Day" },
    "Average temperature",
    "Average hours of daylight",
  ],
  [new Date(2014, 0), -0.5, 5.7],
  [new Date(2014, 1), 0.4, 8.7],
  [new Date(2014, 2), 0.5, 12],
  [new Date(2014, 3), 2.9, 15.3],
  [new Date(2014, 4), 6.3, 18.6],
  [new Date(2014, 5), 9, 20.9],
  [new Date(2014, 6), 10.6, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8), 7.4, 13.3],
  [new Date(2014, 9), 4.4, 9.9],
  [new Date(2014, 10), 1.1, 6.6],
  [new Date(2014, 11), -0.2, 4.5],
];
export const line_options = {
  chart: {
    title: "Average Temperatures and Daylight in Iceland Throughout the Year",
  },
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Temps" },
    1: { axis: "Daylight" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: "Temps (Celsius)" },
      Daylight: { label: "Daylight" },
    },
  },
};
const charts = () => {
  return (
    <>
      <div className='dataContainer'>
        <div>
          <Chart chartType="ColumnChart" width="550px" height="400px" data={column_data} />
          <div className='titleExp'>
            <h3>Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Duis viverra diam non justo. Vivamus luctus egestas leo. Proin in tellus sit amet nibh dignissim sagittis. Suspendisse sagittis ultrices augue. Nullam faucibus mi quis velit. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Etiam quis quam. Aenean fermentum risus id tortor. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer pellentesque quam vel velit. Fusce nibh. Etiam bibendum elit eget erat. Nullam sit amet magna in magna gravida vehicula. Ut enim ad minima veniam, quis nostrum exercitationem</p>
          </div>
        </div>
      </div>
      <hr className='divider'/>
      <div className='dataContainer'>
        <div>
        <div className='titleExp'>
            <h3>Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Duis viverra diam non justo. Vivamus luctus egestas leo. Proin in tellus sit amet nibh dignissim sagittis. Suspendisse sagittis ultrices augue. Nullam faucibus mi quis velit. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Etiam quis quam. Aenean fermentum risus id tortor. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer pellentesque quam vel velit. Fusce nibh. Etiam bibendum elit eget erat. Nullam sit amet magna in magna gravida vehicula. Ut enim ad minima veniam, quis nostrum exercitationem</p>
        </div>
          <Chart
          chartType="Line"
          width="550px"
          height="400px"
          data={line_data}
          options={line_options}
          />
        </div>
      </div>
    </>
  )
}

export default charts;