import './dashboard.css';
import { singleChart } from '../Infograph/Chart';
function Dashboard(props) {
  return (
    <div className="Dashboard">
        {/* <div className="dashBackground"></div> */}
        {/* <div className="overlayDash"></div> */}
        <section className='row'>
            <div className='dashCard'>
                <div>
                    <h2>Upcoming Check-Ups</h2>
                    <span>You have <span className='weekNumber'>3</span> check-ups coming this month.</span>
                </div>
                <div className='check-card check-card-pastDue'>
                    <div className='upperCard'>
                        <div className="cardTitle">Eye Check-up</div>
                        <div className="due">due: past 3 days</div>
                    </div>
                    <div className="cardCont">
                        <button className="btn btn-success">Checked</button>
                    </div>
                </div>
                <div className='check-card'>
                    <div className='upperCard'>
                        <div className="cardTitle">Foot Check-up</div>
                        <div className="due">due: in 5 days</div>
                    </div>
                    <div className="cardCont">
                        <button className="btn btn-success">Checked</button>
                    </div>
                </div>
                <div className='check-card'>
                    <div className='upperCard'>
                        <div className="cardTitle">Triglyceride Check-up</div>
                        <div className="due">due: in 17 days</div>
                    </div>
                    <div className="cardCont">
                        <button className="btn btn-success">Checked</button>
                    </div>
                </div>
            </div>
            <div className='dashCard'>
                <div>
                    <h2>History of Check-Ups</h2>
                    <span>Past check-ups can be seen here</span>
                </div>
                <div className='check-card check-card-history'>
                    <div className='upperCard'>
                        <div className="cardTitle">Hemoglobin Check-up</div>
                        <div className="due">Completed: 1 days ago</div>
                    </div>
                </div>
                <div className='check-card check-card-history'>
                    <div className='upperCard'>
                        <div className="cardTitle">Cholesterol Check-up</div>
                        <div className="due">Completed: 5 days ago</div>
                    </div>
                </div>
                <div className='check-card check-card-history'>
                    <div className='upperCard'>
                        <div className="cardTitle">ECG Check-up</div>
                        <div className="due">Completed: 17 days ago</div>
                    </div>
                </div>
            </div>
        </section>
        <section className='row'>
            <div className='dashCard'>
                <h3 className="titleGraph">Last Updated Graph</h3>
                <span className="updateDate">Updated on 13/11/2022</span>
                <div>
                    {singleChart()}
                </div>
            </div>
            <div className='dashCard'>
                <h3>Information About Diabetes</h3>
                <iframe className='iframeDash' src="https://www.youtube.com/embed/rVH9J9uuySc" title="Diabetes - A lucrative disease | DW Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    </div>
  );
}

export default Dashboard;