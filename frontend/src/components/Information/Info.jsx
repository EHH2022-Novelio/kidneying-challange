import './Info.css';


function Info() {

  return (
    <>
    <div className="textsInfo">
      <h2>Important Videos About Diabetes</h2>
      <span>We feel that these videos are a strong step into understanding the fundemantels of diabetes.</span>
        
    </div>
      <div className="infoCont">
      <hr className="divider" />
        <div className="infoSect">
            <div className='textInfo'>
                <h4>Diabetes Symptoms</h4>
                <div>How can you tell if you have diabetes? <br/>
What are the early signs of diabetes? <br/>
What types of diabetes exist? <br/>All these questions are answered in the video.</div>
            </div>
            <iframe className='iframeWidth' src="https://www.youtube.com/embed/503WXGa7uxc" title="Diabetes Symptoms | Diabetes Mellitus | Type 2 Diabetes - Signs & Symptoms | Diabetes Warning Signs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <hr className="divider" />
        <div className="infoSect">
        <iframe className='iframeWidth' src="https://www.youtube.com/embed/pOHpnnF3mlw" title="Living with type 1 diabetes, a day in the life of Tom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='textInfo'>
                <h4>Living with type 1 diabetes</h4>
                <div> Over 1 million children and adolescents currently live with type 1 diabetes. <br/>Many children with diabetes face discrimination in the school environment, it affects their self-esteem, productivity and management of their disease. <br/>Children who are not able to manage their condition safely and securely at school may be at greater risk of complications from diabetes.</div>
            </div>
        </div>
        <hr className="divider" />
        <div className="infoSect">
            <div className='textInfo'>
                <h4>Managing Diabetes</h4>
                <div>Technology is finally innovating diabetes management. With the advancement in technologies like continuous glucose monitors, traditional insulin pumps are evolving into smarter devices that can automate insulin delivery.</div>
            </div>
            <iframe className='iframeWidth' src="https://www.youtube.com/embed/XLUFXcm9Acc" title="How High-Tech Insulin Pumps Make Managing Diabetes Easier" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default Info;