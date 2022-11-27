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
                <h4>title1</h4>
                <div>some text here explaining video</div>
            </div>
            <iframe className='iframeWidth' src="https://www.youtube.com/embed/503WXGa7uxc" title="Diabetes Symptoms | Diabetes Mellitus | Type 2 Diabetes - Signs & Symptoms | Diabetes Warning Signs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <hr className="divider" />
        <div className="infoSect">
        <iframe className='iframeWidth' src="https://www.youtube.com/embed/pOHpnnF3mlw" title="Living with type 1 diabetes, a day in the life of Tom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='textInfo'>
                <h4>title1</h4>
                <div>some text here explaining video</div>
            </div>
        </div>
        <hr className="divider" />
        <div className="infoSect">
            <div className='textInfo'>
                <h4>title1</h4>
                <div>some text here explaining video</div>
            </div>
            <iframe className='iframeWidth' src="https://www.youtube.com/embed/XLUFXcm9Acc" title="How High-Tech Insulin Pumps Make Managing Diabetes Easier" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default Info;