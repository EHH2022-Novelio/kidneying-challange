import './Landing.css';
import {Link} from "react-router-dom";
import  { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import graphImage from '../../img/graph.png'; // Tell webpack this JS file uses this image
import dashImage from '../../img/dash.png'; // Tell webpack this JS file uses this image

function Landing(props) {

    const history = useNavigate();

    useEffect(() => {
        console.log(props.user);
        console.log(props.user != undefined, props.user.username !== undefined)
        if (props.user != undefined, props.user.username !== undefined){
            console.log('here');
            history("/dashboard");
        }else{
            console.log("not logged");
        }
    }, [props.user])
  return (
    <>
        <section className='Landing'>
            <div className='backgroundImage' ></div>
            <div className='overlay'></div>
            <h3>Track your diabetes!</h3>
            <p>Regular check-ups is an important step in managing your diabetes and preventing complications. Novelia makes keeping track of the examinations, devices and medications much easier for you. <br/><br/> Together, we make diabetes suck less!</p>
            <div className='buttonCont'><Link to="/register"><button className='btn btn-success'>Start Tracking</button></Link></div>
        </section>
        <section className='Landing2'>
            <div>
                <div className='parCont'>
                    <h3>Never forget your check-ups! </h3>
                    <p>You can be sure that you will never miss a check-up. Set reminders for your monthly or annual check-ups. </p>
                </div>
                <div>
                <img src={dashImage} alt="Graph"  width={600} height={400} />
                </div>
            </div>
        </section>
        <hr className='divider'/>

        <section className='Landing2'>
            <div>
                <img src={graphImage} alt="Graph"  width={600} height={400} />
                <div className='parCont'>
                    <h3>Understand your diabetes!</h3>
                    <p>Get insights into what’s going on with your diabetes. Thanks to infographics you’ll be able to identify areas where your diabetes management could be optimized and keep your diabetes under control.</p>
                </div>
       
            </div>
        </section>
    </>
  );
}

export default Landing; 