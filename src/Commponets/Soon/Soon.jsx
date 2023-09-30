import { Link } from 'react-router-dom';
import soon from '../../images/work-in-progress.png';

const Soon = () => {

    return (

        <>

            <div className="container">

                <div dir='ltr' className="row soon shadow p-3 mt-5">

                <div className="col-lg-6 d-flex align-items-center justify-content-center">

                    <img src={soon} alt="soon" />
                </div>

                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="content p-3">
                            <h2>قريبا</h2>
                            <p>
                                هذا القسم قيد الصيانة قريبا سيتم عرض اخر اخبار منصة وسيط كار ومالجديد في التطبيق
                            </p>
                            <Link to={'/'}>
                                <a href="">العودة الى الرئيسية</a>
                            </Link>
                           
                        </div>
                    </div>

                 

                </div>

            </div>
        
        </>

    );

}

export default Soon;