import './Landing.css';

function Landing() {
  return (
    <div className="Landing">
        <div className='backgroundImage' ></div>
        <div className='overlay'></div>
        <h3>Track your diabetes!</h3>
        <p>Regular check-ups is an important step in managing your diabetes and preventing complications. Novelia makes keeping track of the examinations, devices and medications much easier for you. <br/><br/> Together, we make diabetes suck less!

</p>
        <div className='buttonCont'><button className="btn btn-primary">Start Tracking</button></div>
    </div>
  );
}

export default Landing; 