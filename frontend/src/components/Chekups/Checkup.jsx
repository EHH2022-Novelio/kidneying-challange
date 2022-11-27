import './Checkup.css';
import "../Dashboard/dashboard.css";


function Check() {

  return (
    <>
      <div className="containerCheck">
        <h2>Keep Up With Your Schedule!</h2>
        <p>You can see your schedule of check-ups here easily.</p>
        <div className="cardContainer">
            <div className="check-card check-card-pastDue">
                <div className='upperCard'>
                    <div className="cardTitle">Eye Chekup</div>
                    <div className="due">due: past 1 days</div>
                </div>
                <div className="cardCont">
                    <button className="btn btn-success">Checked</button>
                </div>
            </div>
            <div className="check-card check-card-pastDue">
            <div className='upperCard'>
                            <div className="cardTitle">Feet Examination</div>
                            <div className="due">due: past 3 days</div>
                        </div>
                        <div className="cardCont">
                            <button className="btn btn-success">Checked</button>
                        </div>
            </div>
            <div className="check-card">
            <div className='upperCard'>
                            <div className="cardTitle">Eye Chekup</div>
                            <div className="due">due: in 3 days</div>
                        </div>
                        <div className="cardCont">
                            <button className="btn btn-success">Checked</button>
                        </div>
            </div>
            <div className="check-card">
            <div className='upperCard'>
                            <div className="cardTitle">Eye Chekup</div>
                            <div className="due">due: past 3 days</div>
                        </div>
                        <div className="cardCont">
                            <button className="btn btn-success">Checked</button>
                        </div>
            </div>
            <div className="check-card">
            <div className='upperCard'>
                            <div className="cardTitle">Eye Chekup</div>
                            <div className="due">due: past 3 days</div>
                        </div>
                        <div className="cardCont">
                            <button className="btn btn-success">Checked</button>
                        </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Check;