import header_car from '../../images/vision.svg';
import see from '../../images/vision.svg';

const See = () => {

    return (

        <>

            <section className="see">

            <div className="container">

                <article dir='ltr' className="row">

                    <div className="col-lg-6 d-flex align-items-center justify-content-center img">
                        <img src={see} alt="" />
                        {/* <img className='img1' src={see} alt="" /> */}
                    </div>

                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        
                            <img src={header_car} className="header_car position-absolute " alt="car"/>
                     
                    
                      
                        <div className="content">
                            <h2>رؤيتنا</h2>
                            <p>
                                تابعنا على مواقع التواصل تابعنا على مواقع التواصل
                                تابعنا على مواقع التواصل تابعنا على مواقع التواصل
                                تابعنا على مواقع التواصل تابعنا على مواقع التواصل
                                تابعنا على مواقع التواصل تابعنا على مواقع التواصل
                                تابعنا على مواقع التواصل تابعنا على مواقع التواصل
                                تابعنا على مواقع التواصل تابعنا على مواقع التواصل
                            </p>
                        </div>

                    </div>
                 

                </article>
            </div>

            </section>

        </>

    );
}

export default See;