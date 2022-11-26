import './Landing.css';

function Landing() {
  return (
    <>
        <section className='Landing'>
            <div className='backgroundImage' ></div>
            <div className='overlay'></div>
            <h3>Track your diabetes!</h3>
        <p>Regular check-ups is an important step in managing your diabetes and preventing complications. Novelia makes keeping track of the examinations, devices and medications much easier for you. <br/><br/> Together, we make diabetes suck less!</p>
            <div className='buttonCont'><button className='btn btn-primary'>Start Tracking</button></div>
        </section>
        <section className='Landing2'>
            <div>
                <div className='parCont'>
                    <h3>Never forget your check ups!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. In convallis. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer vulputate sem a nibh rutrum consequat. Fusce wisi. Vestibulum fermentum tortor id mi. Pellentesque arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div>
                    some Img
                </div>
            </div>
        </section>
    </>
  );
}

export default Landing; 