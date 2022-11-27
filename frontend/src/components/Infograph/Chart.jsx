import { Chart } from "react-google-charts";


export const column_data = [
  ["Month", "check-ups"],
  ["January", 4], // RGB value
  ["February", 6], // English color name
  ["March", 2],
  ["April", 5], // CSS-style declaration
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
            <h3>Check-ups</h3>
            <p>Regular health check-ups can identify any early signs of health issues. Finding problems early means that your chances for effective treatment are increased. Keep track of your check-ups.</p>
        </div>
          <Chart
          chartType="ColumnChart"
          width="550px"
          height="400px"
          data={column_data}
          // options={line_options}
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