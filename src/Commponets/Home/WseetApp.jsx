import Screenshot from '../../images/phone.png';
import car_app from '../../images/car_app.svg';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ShemmerPone from '../Shemmers/ShemmerPone';
import ShemerApp from '../Shemmers/ShemerApp';

const WseetApp = () => {

    const [loading,setLoading] = useState(false);
    useEffect(() => {
     
        window.onload = () => {
            setLoading(true);
        } 
    
    },[]);

    return (

        <>

            <section className="app d-flex align-items-end justify-content-center position-relative">

            <img src={car_app} className="back" alt="" />

                <div className="container d-flex align-items-center justify-content-center ">

                    <article dir="ltr" className="row">

                        <div className="col-lg-6  position-relative">

                            {loading ? (
                                <ShemmerPone />
                            ):(
                                <div className="img d-flex">
                                     <img src={Screenshot} alt="" />
                                    <img src={Screenshot} alt="" />
                                </div>
                            )}
                            

                        </div>
                        
                  
                        <div className="col-lg-6 d-flex align-items-center justify-content-center appA">
                        {loading ? 
                        (<ShemerApp />)
                        :(
                            <div className="content">
                                <h3>تطبيق وسيط كار</h3>
                                <p>
                                    تطبيق بيع وشراء السيارات الجديدة والمستعملة
                                    . تطبيق يقدم كل شئ من بيع وشراء 
                                    السيارات والبحث عنها مرورا بقطع الغيار وخدمات الصيانة المتعددة وصولا الى غسيل السيارات
                                   
                                </p>
                                <a href="">
                                    <span>تحميل التطبيق</span>
                                    <i class="fa-solid fa-download"></i>
                                </a>
                                 <Link to={'/privacy_policy'}>
                                    <a href=''>
                                        <span>سياسية الخصوصية</span>
                                    </a>
                                 </Link>
                               
                            
                            </div>
                        )}
                        </div>
                      
                    </article>

                </div>

            </section>

        </>

    );

}

export default WseetApp;