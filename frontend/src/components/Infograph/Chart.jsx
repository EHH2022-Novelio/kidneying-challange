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
    "x",
    "Normal",
    "Prediabetic",
    "Diabetic",
    "You",
  ],
  [0, 75, 85, 190,160],
  [1, 80, 148, 215,160],
  [2, 110, 178, 360,160],
  [3, 80, 120, 320,160],
  [4, 78, 75, 280,160],
  [5, 77, 74, 260,160],
  [6, 77, 84, 240,160],

];
export const line_options = {
  title: "Blood Glucose Levels",
  hAxis: {
    title: "Hours after meal",
  },
  vAxis: {
    title: 'mg/dl',
    ticks: [0,50,100,150,200,250,300,350,400],

  },
  curveType: "function",

};
const charts = () => {
  return (
    <>
      <div className='dataContainer'>
        <div>
          <Chart chartType="LineChart" width="700px" height="400px" data={line_data} options={line_options}
 />
          <div className='titleExp'>
            <h3>Blood Glucose</h3>
            <p>It's important to keep your blood sugar levels in your target range as much as possible to help prevent or delay long-term, serious health problems.</p>
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
export const singleChart = () => {
   return <Chart chartType="LineChart" width="330px" height="200px" data={line_data} options={line_options} />
}

export default charts;