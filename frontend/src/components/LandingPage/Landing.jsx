import './Landing.css';

function Landing() {
  return (
    <div className="Landing">
        <div className='backgroundImage' ></div>
        <div className='overlay'></div>
        <h3>Track your diabetes!</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. <br /> In convallis. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. <br /> Integer vulputate sem a nibh rutrum consequat. Fusce wisi. Vestibulum fermentum tortor id mi. Pellentesque arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <div className='buttonCont'><button className="btn btn-primary">Start Tracking</button></div>
    </div>
  );
}

export default Landing;